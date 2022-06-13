import React, { useState } from "react";
import axios from 'axios';
import {  useNavigate} from 'react-router-dom';
// import authHeader from "../interceptors/auth-header";

const Login_URL = 'http://localhost:8000/api/address/addAddress'


function PickupAddress() {

  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

 

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, phone, password);
    try {
        const resp = axios.post(Login_URL, {
            area: area,
            pincode: pincode,
            city: city,
            state: state,
            country : country
        },
        );
        console.log(resp.data)
        navigate('/bussiness-detail');
    } catch (error) {
        console.log(error.response)

    }
}



  return (
    <div className="row">
      {/* form start here  */}
      <div className="column1">
        <div className="wrapper">
          <div className="form_container">
            <form name="form" onSubmit={onSubmit}>
              <div className="heading">
                <h2>Give your pickup address</h2>
              </div>
              <div className="form_item">
                <input type="text" name="area" placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)} required />
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <input type="text" name="pincode" placeholder="Pin Code" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                </div>
              </div>

              <div className="form_wrap">
                <div className="form_item">
                  <input type="text" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <input type="text" name="state" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} required />
                </div>
              </div>
              <div className="form_wrap">
                <div className="form_item">
                  <input type="text" name="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                </div>
              </div>

              <div className="btn">
                <input type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* form ends here  */}
    </div>
  );
}

export default PickupAddress;
