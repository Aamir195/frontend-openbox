import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Vendor = () => {

    var vendor_id = localStorage.getItem("id");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isVerified, setIsverified] = useState("");

    // {
    //     "id": 1,
    //     "name": "Sumit Pandey",
    //     "email": "sumit@gmail.com",
    //     "phone": 7738789089,
    //     "password": "$2b$10$GyIFAtpdiwnCChOx6O2yDOlf6JTG7tdcTu05HTXmbvycjzlWkJ1BC",
    //     "bankId": "1",
    //     "addressId": "1",
    //     "businessDetailId": "1",
    //     "isVerified": 1,
    //     "isActive": 0
    //   }
    useEffect(() =>{
        fetchvendor(vendor_id)
    })

const fetchvendor =  async(vendor_id) => {
    var result = await axios.post("http://localhost:8000/api/vendor/getvendorById", {
        id : vendor_id
    });
    result = await result.data;

    setName(result.name);
    setEmail(result.email);
    setPhone(result.phone);
    setIsverified(result.isVerified);
}
    
    return (
        <>
            <div className="col-12 vendor ">
                <div className="card p-3 ">
                    <h5 className="my-3">Your Details
                    </h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6"> <span><strong>Name:</strong></span> </div>
                            <div className="col-6"><span>{name}</span>
                            {isVerified === 1 ? <>✅</> : <></> }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Email:</strong></span> </div>
                            <div className="col-6"><span>{email}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Phone:</strong></span> </div>
                            <div className="col-6"><span>{phone}</span></div>
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

export default Vendor
