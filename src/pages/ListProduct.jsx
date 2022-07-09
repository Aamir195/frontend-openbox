import React from "react";
import { useEffect, useState } from "react";
import { TabTitle } from "../components/Tabtitle";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../components/Liist";
import Error from "./Error"
// import "./listproductt.css";



const Listproduct = () => {

    TabTitle('List Product - OpenBox.IN')

    var vendor_id = localStorage.getItem("id");

    const [isVerified, setVerified] = useState("");
   

    useEffect(() => {
        getVendor(vendor_id)
    })


    //getting data from vendor table to see that vendor is verfied or not 
    const getVendor = async (vendor_id) => {
        var vendor = await axios.post('http://localhost:9000/api/vendor/getvendorById', {
            id: vendor_id

        });
        vendor = await vendor.data;
        setVerified(vendor.isVerified);
        //alert(vendor.isVerified) // contain the value of isVarified value from vendor table 

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

            
                
           
            {(() => {
        if (isVerified ==1) {
          return (
            <div><List /></div>
          )
        } else {
          return (
            <div> <Error /></div>
          )
        }
      })()}

        </div>

    );
};

export default Listproduct;