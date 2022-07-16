import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'
import { padding } from '@mui/system';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const Orderdetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [productName, setProductname] =useState("")
  const [quantity, setQuantity] =useState("")
  const [amount, setAmount] =useState("")
  const [unitprice, setUnitprice] =useState("")
  const [name, setName] = useState("");
  const [phone , setPhone] =useState("")
  const [email ,setEmail] = useState("")
  const[ lane, setLane]=useState("")
  const[ city, setCity]=useState("")
  const[ state, setState]=useState("")
  const[ country, setCountry]=useState("")
  const[ pincode, setPincode]=useState("")
  const[ summary, setSummary]=useState([])

  let vendor_id = localStorage.getItem('id')


  useEffect(  () => {
   getOrderDetails(params.id);
   getOrderCustomerDetails(vendor_id,params.id)

}, [])

const getOrderDetails = async (id) => {

  var result =await axios.post('http://localhost:8000/api/order/showOrdersProducts', 
  {orderId:id})
  var ans = await result.data
  setSummary(ans)

}

const getOrderCustomerDetails = async (vendor_id,id) => {

  var result =await axios.post('http://localhost:8000/api/order/getCustomerDetails', 
  { vendorId:1
    ,id})
  var result = await result.data

  setName(result[0].name);
  setPhone(result[0].phone);
  setEmail(result[0].email);
  setLane(result[0].lane)
  setCity(result[0].city)
  setState(result[0].state)
  setCountry(result[0].country)
  setPincode(result[0].pincode)

}


const userColumns = [
  { field: "id", headerName: "product_ID", width: 70 },
  { field: "productName", headerName: "Product Name", width: 200 },
  { field: "quantity", headerName: "Quanity", width: 100 },
  { field: "unitPrice", headerName: "Unit Price", width: 150 },
 
  { field: "netAmount", headerName: "Net Price", width: 200 },
  { field: "taxValue", headerName: "GST", width: 100 },
   { field: "discount", headerName: "Discount", width: 150 },
  { field: "totalAmount", headerName: "Total Price", width: 150 }, 
 
  //totalPrices changes to netPrice
]


  return (
    <div className="container mt-3">
      <div className="row">
        <nav aria-label="breadcrumb" className='bg-light rounded-3 p-3 mb-4' >
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
            <li className="breadcrumb-item"><Link to='/order'>Order</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Order Detail</li>
          </ol>
        </nav>
      </div>
      <div className="row mt-2">
        <h4>Summary</h4>
      </div>
      <div className="row">
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={summary}
            columns={userColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
        <div className="customer">
          {/* <div className="card">
             <div className="card-body">
              <h4 class="card-title">Total Calculation </h4>
              <hr />
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td><p>Total Net Amount</p></td>
                    <td>
                     <p>₹ 2300</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Total Shipping</p>
                    </td>
                    <td>
                      <p>
                     ₹ 00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                      Billing Total
                      </p>
                    </td>
                    <td>
                    <p> ₹ 2300</p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div> 
          </div>*/}

        </div>

        <div className="customer">
          <div className="card">

            <div className="card-body">
              <h4 class="card-title">Customer Details </h4>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-md-6" >
                    <h5>
                      Customer Name :
                    </h5>
                    <p>{name}</p>
                    <h5>
                      Mobile Number :
                    </h5>
                    <p>{phone}</p>
                    <h5>
                      Email Address :
                    </h5>
                    <p>{email}</p>
                  </div>
                  <div className="col-md-6" >
                    <h5>
                      Address :
                    </h5>
                    <p>
                    <span>{lane} {city} {state}</span> <br />
                  <span>{country} {pincode} </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Orderdetails