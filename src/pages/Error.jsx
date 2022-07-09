import React from 'react'
import { useEffect, useState } from "react";
import { TabTitle } from "../components/Tabtitle";
import { Link } from "react-router-dom";
import axios from "axios";

const Error = () => {
    var vendor_id = localStorage.getItem("id");

    const [isVerified, setVerified] = useState("");
    const [bankId, setBankId] = useState("");
    const [addressId, setAddressId] = useState("");
    const [businessId, setBussinessId] = useState("");

    useEffect(() => {
        getVendor(vendor_id)
    })


    //getting data from vendor table to see that vendor is verfied or not 
    const getVendor = async () => {
        var vendor = await axios.post('http://localhost:9000/api/vendor/getvendorById', {
            id: 1
        });
        vendor = await vendor.data;
        setAddressId(vendor.addressId);
        setBankId(vendor.bankId);
        setBussinessId(vendor.businessId);
        setVerified(vendor.isVerified);
        //alert(vendor.isVerified) // contain the value of isVarified value from vendor table 

    }
    return (
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <div className="card-header1">
                        Warning !
                    </div>
                    <hr />
                    <div className="warning-card">
                        <p className="warning-card"> You are not verified ! </p>
                        {
                            (addressId === null) || (bankId === null) || (businessId === null) ?
                                <>
                                    <p>Please Complete your Profile</p>
                                </> :
                                <>
                                    <p>Wait For Some Time To verify Your Account </p>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error