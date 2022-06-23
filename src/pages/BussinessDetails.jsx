import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add_URL = "http://localhost:8000/api/address/addAddress";
const BUS_URL = "http://localhost:8000/api/business/addBusinessDetail";
function BussinessDetails() {

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

    var resp = await axios.post(Add_URL, {
      lane,
      pincode,
      city,
      state,
      country,
    })
    resp = await resp.data;
    // console.log(resp.id);
    const id = resp.id
    console.log(id)
    setId(id);
    navigate('/bu')
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
                    <input type="submit" value="Continue" onClick={onSubmit()} />
                  </div>
                </div>
              </form>
              <form action="">
                <div className="formRight">
                  <br />
                  <p className="ptext">Your Information</p>
                  <div className="form_item">
                    <input type="text" placeholder=" gstNumber Number"
                      name=" gstNumber"
                      value={gstNumber}
                      onChange={(e) => setgstNumber(e.target.value)} required />
                  </div>
                  <div className="form_item">
                    <input type="text" placeholder="Bussiness Name" name="businessName"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)} required />
                  </div>
                  <div className="form_wrap">
                    <div className="form_item">
                      <input type="text" placeholder="PAN Number" name="businessName"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value)} required />
                    </div>
                  </div>
                  <div className="form_wrap">
                    <p className="ptext">Signature</p>
                    <table>
                      <tr>
                        <td>
                          <p>
                            Make sure the signature is visibly large and on a
                            white background. Allowed file formats are
                            .jpg,.jpeg,.png,.pdf. Maximum file size : 20 MB.
                            Seal on the signature not a requirement.
                          </p>
                          <label for="myfile">Select files:</label>
                          <input type="file" id="myfile" name="myfile" onChange={(e) => setFiles(e.target.files[0])} multiple /><br></br>
                        </td>
                      </tr>
                    </table>

                  </div>
                  <div className="btn1">
                    <input type="submit" onClick={onhandleChange()} value="Continue" />
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

export default BussinessDetails
