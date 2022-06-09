import axios from "axios";
const API_URL = "http://localhost:8000/api/vendor/";
const register = (username,phone, email, password) => {
  return axios.post(API_URL + "addVendor", {
    username,
    phone,
    email,
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
const authService = {
  register,
  login,
  logout,
};
export default authService;