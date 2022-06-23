import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BUS_URL = "http://localhost:8000/api/business/addBusinessDetail";
function BussinessDetails2() {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [gstNumber, setgstNumber] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [panNumber, setPanNumber] = useState("");


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
    };

    const onhandleChange = async (e) => {

        const formData = new FormData();
        formData.append('addressId', id)
        formData.append('gstNumber', gstNumber);
        formData.append('businessName', businessName);
        formData.append('panNumber', panNumber);
        formData.append('signatureImage', files);
    
        try {
          var result = await axios.post(BUS_URL, formData)
    
          result = await result.data
          console.log(result)
    
        } catch (error) {
            alert(response.error)
        
        }
    
    
      }



    return (
        <>
            <div id='main-content'>
                <div className="row">
                    <div className="sectionclassName">
                        <h1 className="h1Text">Give your Business Details</h1>
                        <div className="formconatiner1">
                            
                            <form action="">
                                <div className="form">
                                    <br />
                                    <p className="ptext">Your Bussiness Information</p>
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

export default BussinessDetails2
