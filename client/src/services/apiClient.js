const BASE_URL = 'http://localhost:4000';


export default {
  loginReq: (data) => {
    return postRequest('users/login', data);
  }
};



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
