import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Pickupadd = () => {

  var vendor_id = localStorage.getItem("id");

    const [lane, setLane] = useState("");
    const [city, setCity] = useState("");
    const [state, setState1] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    // {
    //     "id": 1,
    //     "lane": "RS Marg, Malad East",
    //     "city": "Mumbai",
    //     "state": "Maharashtra",
    //     "country": "India",
    //     "pincode": "400097"
    //   }

    useEffect(() => {
        fetchadd(vendor_id)
    })

    const fetchadd = async(vendor_id) =>{
        var result = await axios.post("http://localhost:9000/api/address/getAddress", {
            id : vendor_id
        });
        result = await result.data
        setLane(result.lane);
        setCity(result.city);
        setState1(result.state);
        setCountry(result.country);
        setPincode(result.pincode);

    }

    return (
        <>
            <div className="col-6">
                <div className="card p-3 ">
                    <h5 className="my-3">Pickup Address
                    </h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6"> <span><strong>Lane:</strong></span> </div>
                            <div className="col-6"><span>{lane}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Pincode:</strong></span> </div>
                            <div className="col-6"><span>{pincode}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>State:</strong></span> </div>
                            <div className="col-6"><span>{state}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Country:</strong></span> </div>
                            <div className="col-6"><span>{country}</span></div>
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

export default Pickupadd
