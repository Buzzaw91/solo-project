import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Socket } from 'react-socket-io';
import { Router, navigate, Link } from '@reach/router';
import SignIn from './containers/SignIn';


const uri = 'http://localhost/';
const options = { transports: ['websocket'] };


function App({ children }) {

  return (
    <div className="App">
      <Router>
        <SignIn path="/containers/SignIn" />
      </Router>
    <Link to="/containers/SignIn" color="primary">Sign up</Link>
    </div>
  );
}

export default App;
