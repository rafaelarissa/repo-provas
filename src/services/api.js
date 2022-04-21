import axios from "axios";

const BASE_URL = "http://localhost:5000";

// function authData(token) {
//   return {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   };
// }

async function signUp(user) {
  await axios.post(`${BASE_URL}/sing-up`, user);
}
async function login(user) {
  await axios.post(`${BASE_URL}/`, user);
}

const api = {
  signUp,
};

export default api;
