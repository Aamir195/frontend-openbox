import React, { useState } from 'react'
import axios from "axios";
// import { useNavigate } from "react-router-dom";
const Login_URL = "http://localhost:8000/api/address/addAddress";
function BankDetails() {

  // const navigate = useNavigate();
  const [accountHolderName, setAccount] = useState("");
  const [ifscCode, setIfsccode] = useState("");
  const [bankName, setBank] = useState("");
  const [accountType, setAccounttype] = useState("");
  const [file, setFile] = useState("");


  function onSubmit(){
    console.log("Aamir")
    console.warn(accountHolderName, ifscCode, bankName, accountType)
  }
    return (
      <div className="row">
        {/* form start here  */}
        <div className="parent">
          <div className="column1">
            <div className="wrapper">
              <div className="formconatiner1">
                <form name="form" onSubmit={onSubmit}>
                  <div className="heading">
                    <h2>Give your Bank Details</h2>
                  </div>
                  <div className="form_item">
                    <input
                      type="text"
                      name="accountHolderName"
                      placeholder="Account Holder Name"
                      value={accountHolderName}
                      // value={lane}
                      onChange={(e) => setAccount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form_wrap">
                    <div className="form_item">
                      <input
                        type="text"
                        name="ifscCode"
                        placeholder="IFSC Code"
                        value={ifscCode}
                        // value={pincode}
                        onChange={(e) => setIfsccode(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form_wrap">
                    <div className="form_item">
                      <input
                        type="text"
                        name="bankName"
                        placeholder="Bank Name"
                        value={bankName}
                        // value={city}
                        onChange={(e) => setBank(e.target.value)}
                        required
                      />

                    </div>
                  </div>
                  <div className="form_wrap">
                    <div className="form_item">

                      <select className="form-control" name="accountType" value={accountType} onChange={(e) => setAccounttype(e.target.value)} required>
                        <option  disabled value="">Select Account Type</option>
                        <option>Saving</option>
                        <option>Current</option>
                      </select>
                    </div>
                  </div>
                  <div className="form_wrap">
                    <div className="form_item">
                      <label htmlFor="myfile">Select files:</label>
                      <input type="file" name="file" id='file' onChange={(e) => setFile(e.target.files[0])} /><br></br>
                    </div>
                  </div>
                  <div className="btn">
                  <button type="button" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* form ends here  */}
          {/* <div className="vertical"></div> */}
          <div className="column2">
            <h2 className="forh2">
              Get a share of thousands of crores of rupees paid out every week!
            </h2>

          </div>
        </div>

      </div>
    )
  }

export default BankDetails
