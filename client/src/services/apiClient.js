
const BASE_URL = 'http://localhost:4000';



export default {
  signUpReq: (data) => {
    return postRequest('users/signup', data)
    .then(res => {
      const token = res.token;
      localStorage.setItem('jwtToken', token);
    });
  }
  ,
  loginReq: (data) => {
    return postRequest('users/login', data)
    .then(res => {
      const token = res.token;
      localStorage.setItem('jwtToken', token)
    });
  },
  getUsersReq: () => {
    return getRequest('messages/getMessages');
  }

}



const postRequest = async (url, data = {}) => {
  const response = await fetch(`${BASE_URL}/${url}`,{
    method: 'POST',
    mode: 'cors',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  try {
    return await response.json();
  }
  catch (err) {
    console.log(err);
  }
}

const getRequest = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`,{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem('jwtToken')
    }
  });
  try {
    return await response.json();

  }
  catch(err) {
    console.log(err)
  }
}
