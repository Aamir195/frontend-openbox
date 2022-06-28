import React, { useState } from 'react'
// import axios from "axios";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9000/api/bank/addBankDetail";

function BankDetails() {

  const navigate = useNavigate();
  const [accountHolderName, setAccount] = useState("");
  const [ifscCode, setIfsccode] = useState("");
  const [bankName, setBank] = useState("");
  const [accountType, setAccounttype] = useState("");
  const [file, setFile] = useState("");


  async function onSubmit() {
    // console.log("Aamir")
    console.warn(accountHolderName, ifscCode, bankName, accountType, file);
    const formData = new FormData();
    formData.append('accountHolderName', accountHolderName);
    formData.append('ifscCode', ifscCode);
    formData.append('bankName', bankName);
    formData.append('accountType', accountType);
    formData.append('chequeImage', file);

    try {
      let resp = fetch(URL, {
        method: 'POST',
        body: formData
      });
      console.log(resp.data)
      if (resp.status === 200) {
        alert("Your Data Has been saved.");
      }
      // alert("Your Data HAs been saved.")
      navigate('/dashboard', {replace : true});

    }
    catch {
      alert("Something wrong is happend");
    }

  }
  return (
    <div className="container">
      {/* <div className="progress-bar">
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{ width: 25 }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      </div> */}

      <div className="row">

        {/* form start here  */}
        <div className="parent">
          <div className="column1">
            <div className="wrapper">
              <div className="formconatiner1">
                <form name="form">
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
                        <option disabled value="">Select Account Type</option>
                        <option>Saving</option>
                        <option>Current</option>
                      </select>
                    </div>
                  </div>
                  <div className="form_wrap">
                    <div className="form_item">
                      <div style={{ marginTop: 12, marginBottom: 12 }}>
                        Upload cancled cheque :
                      </div>
                      <label htmlFor="myfile">Select files:</label>
                      <input type="file" name="file" id='file' onChange={(e) => setFile(e.target.files[0])} /><br></br>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button" onClick={onSubmit} className="btn btn-primary">Submit</button>
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
    </div>

  )
}

export default BankDetails
