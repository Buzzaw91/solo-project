import React from 'react';
import io from 'socket.io-client';
import './App.css';
import Button from '@material-ui/core/Button';
import { Router, navigate, Link } from '@reach/router';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ApiClient from './services/apiClient';
import Dashboard from './containers/Dashboard';
import Logo from './assets/myLogo.png'
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';





function App() {
  const socket = io.connect('http://localhost:4000', {
    'query': 'token=' + localStorage.getItem('jstToken')
  });

  socket.on('unauthorized', (error) => {
    if (error.data.type == 'UnauthorizedError' || error.data.code == 'invalid_token') {
      // redirect user to login page perhaps?
      console.log('User token has expired');
    }
  });

  const handleNewUserMessage = (newMessage) => {
    console.log(`New messa incoming! ${newMessage}`);
    // Now send the message trought the backend API
  }


const getUsers = async () => {

  const users = await ApiClient.getUsersReq();
    await console.log(users);


}


  return (
    <div className="App">
      <img src={Logo} />
      <Router>
        <SignIn path="/containers/SignIn" />
        <SignUp path="/containers/SignUp" />
        <Dashboard path="/containers/Dashboard" />
      </Router>
    <Link to="/containers/SignIn" color="primary">Login</Link>
    <Link to="/containers/SignUp" color="primary">SignUp</Link>
    <Button onClick={getUsers}>GetUsers</Button>
    <Widget handleNewUserMessage={handleNewUserMessage} />


    </div>
  );
}

export default App;
