import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Images from "../images/index"

const Bussiness = () => {

    var vendor_id = localStorage.getItem("id")

    const [panNumber, setPannumber] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [gstNumber, setGST] = useState("");
    
    // {
    //     "id": 1,
    //     "businessName": "Aamiz Enterprise",
    //     "panNumber": "Awer3456780",
    //     "gstNumber": "dfsdfsdfsfsdf",
    //     "addressId": "1",
    //     "signatureImage": "signature.png"
    //   }

    useEffect(() => {
        fetchBuss(vendor_id)
    })

    const fetchBuss = async (vendor_id) => {
        var result = await axios.post("http://localhost:9000/api/businessDetail/getBusinessDetail", {
            id : 1
        });
        result = await result.data;
        setBusinessName(result.businessName);
        setPannumber(result.panNumber);
        setGST(result.gstNumber);
    }


    return (
        <>
            <div className="col-6 ">
                <div className="card p-3 " style={{ height: 329 }}>
                    <h5 className="my-3">Business Details
                    </h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6"> <span><strong>GSTIN:</strong></span> </div>
                            <div className="col-6"><span>{gstNumber}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Business Name:</strong></span> </div>
                            <div className="col-6"><span>{businessName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>PAN Number:</strong></span> </div>
                            <div className="col-6"><span>{panNumber}</span></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6"> <span><strong>Signature:</strong></span> </div>
                            <div className="col-6"><button className="btn btn-sm btn-outline-warning" data-toggle="modal"
                                data-target="#signature">view</button>
                                {/* <!-- \Modal Signarue --> */}
                                <div className="modal fade" id="signature" tabIndex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">

                                            {/* <!-- Modal heading -->  */}
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Signature
                                                </h5>
                                                <button type="button" className="close btn btn-sm btn-outline-warning" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>

                                            {/* <!-- Modal body with image --> */}
                                            <div className="modal-body">
                                                <img className='docsImage img-thumbnail' src={Images.dummySignature} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row-reverse mb-2">
                            <button type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bussiness
