import axios from "axios";

const BASE_URL = "http:ocalhost:5000";

function authData(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}

async function signUp(user) {
  await axios.post(`${BASE_URL}/sing-up`, user);
}
async function signIn(email, password) {
  // const loginInfo = { email: email, password: password };
  // const token = await axios.post(`${BASE_URL}/login`, loginInfo);
  // return token;
}

const api = {
  signUp,
  signIn,
};

export default api;
