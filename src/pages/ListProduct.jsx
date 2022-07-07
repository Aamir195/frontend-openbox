import React from "react";
import { useEffect, useState } from "react";
import { TabTitle } from "../components/Tabtitle";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../components/list";
// import "./listproductt.css";



const Listproduct = () => {

    TabTitle('List Product - OpenBox.IN')

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
        setVerified(vendor.isVerified); // contain the value of isVarified value from vendor table 

    }

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




    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 ">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">List Product</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* if vendor is verfied show the form and table othervise some data on card  */}
            {
                isVerified === 1 ?
                    <>
<List/>
                    </> :
                    <>
{/* show this when user is not verfied  */}
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
                    </>
            }
        </div>

    );
};

export default Listproduct;