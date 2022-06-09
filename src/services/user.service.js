import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8000/api/";


const addBankDetails = () => {
    return axios.post(API_URL + "user", { headers: authHeader() });
  };
  const addBussiness = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  };
  const addPickupAddress = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  };
  const getDashboard = () => {
      return axios.get(API_URL + "admin", { headers: authHeader() });
    };
  const userService = {
   addBankDetails,
   addBussiness,
   addPickupAddress,
   getDashboard,
  };
export default userService