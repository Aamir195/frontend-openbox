import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BUS_URL = "http://localhost:8000/api/businessDetail/addBusinessDetail";
function BussinessDetails() {


    let addressId = localStorage.getItem('addressId');
    let navigate = useNavigate() ;
    
    // const navigate = useNavigate();
    // const [id, setId] = useState("");
    const [gstNumber, setgstNumber] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [files, setFiles] = useState("");
    let vendor_id = localStorage.getItem('id')

    const onhandleChange = async (e) => {
        e.preventDefault();
   
        try {


        console.log(addressId, gstNumber, businessName, panNumber, files)
        const formData = new FormData();
        formData.append("vendorId", vendor_id);
        formData.append('addressId', addressId)
        formData.append('gstNumber', gstNumber);
        formData.append('businessName', businessName);
        formData.append('panNumber', panNumber);
        formData.append('signatureImage', files);

        
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
            var result = await axios.post(BUS_URL, formData, config)

            result = await result.data
            console.log(result)
            navigate("/bank-detail" , {replace : true})

        } catch (error) {
            alert(error)

        }
    }



    return (
        <>
            <div id='main-content'>
                <div className="row">
                    <div className="sectionclassName">
                        <h1 className="h1Text">Give your Business Details</h1>
                        <div className="formconatiner1">
                            <div className="formleft">
                            <form name='form'>
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
                                                    <input type="file" id="files" name="files" onChange={(e) => setFiles(e.target.files[0])} multiple /><br></br>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                    <div className="btn1" style={{padding:10}}>
                                        <input type="submit" onClick={(e) => onhandleChange(e)} value="Continue" />
                                    </div>
                                </div>
                            </form>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BussinessDetails
