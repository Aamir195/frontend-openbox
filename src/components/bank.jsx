import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Images from '../images';

const Bank = () => {

    var vendor_id = localStorage.getItem("id");

    const [accountHolderName, setName] = useState("");
    const [accountnumber, setAccountNumber] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [bankName, setBank] = useState("");
    const [accountType, setAccounttype] = useState("");


    // {
    //     "id": 1,
    //     "accountHolderName": "Sumit Pandey",
    //     "accountNumber": "1541546545494",
    //     "ifscCode": "BKID1234102",
    //     "bankName": "Union Bank Of India",
    //     "accountType": "SAVING",
    //     "chequeImage": "https://assets1.cleartax-cdn.com/s/img/2020/12/11113001/Cancelled-Cheque.png"
    //   }

    useEffect(() => {
        fetchbank(vendor_id)
    })

    const fetchbank = async(vendor_id) =>{
        var result = await axios.post("http://localhost:8000/api/vendormanagement/getBankDetailsById", {
            id : vendor_id // changed it
        });
        result = await result.data
        setName(result[0].accountHolderName);
        setAccountNumber(result[0].accountNumber);
        setBank(result[0].bankName);
        setIfsc(result[0].ifscCode);
        setAccounttype(result[0].accountType)

    }




    return (
        <>
            <div className="col-6 ">
                <div className="card p-3 ">
                    <h5 className="my-3">Bank Details
                    </h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6"> <span><strong>Account Holder Name:</strong></span> </div>
                            <div className="col-6"><span>{accountHolderName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Account Number:</strong></span> </div>
                            <div className="col-6"><span>{accountnumber}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>IFSC Code:</strong></span> </div>
                            <div className="col-6"><span>{ifsc}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Bank Name:</strong></span> </div>
                            <div className="col-6"><span>{bankName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Account Type:</strong></span> </div>
                            <div className="col-6"><span>{accountType}</span></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6"> <span><strong>Cancelled Cheque:</strong></span> </div>
                            <div className="col-6"><button className="btn btn-sm btn-outline-warning" data-toggle="modal"
                                data-target="#Cheque">view</button>
                                {/* <!-- \Modal Signarue --> */}
                                <div className="modal fade" id="Cheque" tabIndex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">

                                            {/* <!-- Modal heading -->  */}
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Cancelled Cheque
                                                </h5>
                                                <button type="button" className="close btn btn-sm btn-outline-warning" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>

                                            {/* <!-- Modal body with image --> */}
                                            <div className="modal-body">
                                                <img className='docsImage img-thumbnail' src={Images.cheque} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="d-flex flex-row-reverse mb-2">
                            <button type="button" className="btn btn-primary">Update</button>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Bank
