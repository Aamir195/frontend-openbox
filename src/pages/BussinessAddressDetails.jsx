import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add_URL = "http://localhost:9000/api/address/addAddress";
// const BUS_URL = "http://localhost:8000/api/business/addBusinessDetail";
function BussinessAddressDetails() {

  const navigate = useNavigate();
  const [lane, setLane] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState("");


  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, phone, password);

    try{
      var resp = await axios.post(Add_URL, {
        lane,
        pincode,
        city,
        state,
        country,
      })
      resp = await resp.data;
      console.log(resp)
      localStorage.setItem("addressId", (resp.id));
      
      navigate('/bussiness-detail', {replace : true});
    }catch (error) {
       alert(error)
    }
  };

  return (
    <>
      <div id='main-content'>
        <div className="row">
          <div className="sectionclassName">
            <h1 className="h1Text">Give your Business Details</h1>
            <div className="formconatiner1">
              <form name="form" >
                <div className="formleft">
                  <p className="ptext">Your Bussiness Address </p>
                  <div className="form_wrap">
                    <div className="form_item">
                      <input
                        type="text"
                        placeholder="Street/Locality"
                        name="lane"
                        value={lane}
                        onChange={(e) => setLane(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form_custom_column">
                    <div className="form_item" style={{ margin: 2 }}>
                      <input type="text" placeholder="Pincode" name="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required />
                    </div>
                    <div className="form_item">
                      <input type="text" placeholder="City" name="city" value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required />
                    </div>
                  </div>
                  <div className="form_custom_colum">
                    <div className="form_item">
                      <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form_item">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="btn1">
                    <input type="submit" value="Continue" onClick={(e) => onSubmit(e)} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BussinessAddressDetails
