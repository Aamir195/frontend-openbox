import axios from "axios";
const API_URL = "http://localhost:8000/api/vendor/";
const register = (username, email, phone, password) => {
  return axios.post(API_URL + "addVendor", {
    username,
    email,
    phone,
    password,
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "verifyVendor", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};