import axios from "axios";

const BASE_URL = "http://localhost:5000";

function authData(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
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
