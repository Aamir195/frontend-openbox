import React from 'react'
// import Ordertable from '../components/orderTable'
import { Link } from 'react-router-dom'
import { DataGrid } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import clsx from 'clsx';


function Order() {

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [status, setStaus] = useState("")
  const [value, setValue] = useState("");
  const [name, setName] = useState("")
  const [productDescription, setProductdescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [amount, setAmount] = useState("")
  const [subcategoryIcon, setImage] = useState("");
  const [orderdate, setDate] = useState("");
  const [orderstatus, setOrderstatus] = useState("");
  let vendor_id = localStorage.getItem('id')


 //search for status selected 
  const handleChange = e => {
    setStaus(e.target.value)
    setValue(e.target.value)
    console.log("deepak" + e.target.value)
    searchOrder(e.target.value);
  }

  //search for no status selected 
  const onSubmit = e =>{
    getAllOrdersNoStatus()
  }


  useEffect(() => {
    getAllOrder(vendor_id);
  }, [])

  const getAllOrder = async (id) => {
    var result = await axios.post('http://localhost:9000/api/order/showAllOrders',
      {
        vendorId: 1
      })
    var ans = await result.data
    console.log(ans)
    setSearch(ans)
  }



  const actionColumn = [
    {
      field: "action",
      headerName: "Summary",
      width: 100,
      // flex : 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/order-details/" + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <div className="btn1">Summary</div>  {/* className Changed  */}

            </Link>
          </div>
        );
      },
    },
  ];


  const [search, setSearch] = useState([]);

  const searchOrder = async (xyz) => {
    var result = await axios.post('http://localhost:9000/api/order/getAllOrders',
      {
        startDate: startdate,
        endDate: enddate,
        Status: xyz,
        vendorId: vendor_id

      })
    var ans = await result.data
    console.log(ans)
    setSearch(ans)
  }


  const getAllOrdersNoStatus = async (e) => {
    var result = await axios.post('http://localhost:9000/api/order/getAllOrdersNoStatus',
      {
        startDate: startdate,
        endDate: enddate,
        // Status:xyz,
        vendorId: vendor_id

      })
    var ans = await result.data
    console.log(ans)
    setSearch(ans)
  }

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "quantity", headerName: "Quanity", width: 200 },
    { field: "amount", headerName: "Amount", width: 200 },
    { field: "Date", headerName: "Date", width: 200 },
    {
      field: "orderStatus", headerName: "OrderStatus"
      , width: 200
    }
  ]
  return (
    <div className='container mt-3' >
      <div className="row">
        <nav aria-label="breadcrumb" className='bg-light rounded-3 p-3 mb-4'>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Order</li>
          </ol>
        </nav>
      </div>
      <div className="row mt-2">
        <form className="form-inline">
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <div className="form-outline">
                <label className="form-label" htmlFor="typeNumber">Select Start Date</label>
                <input type="date" id="typeNumber" className="form-control" onChange={(e) => { setStartDate(e.target.value) }} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <div className="form-outline">
                <label className="form-label" htmlFor="typeNumber">Select End Date</label>
                <input type="date" id="typeNumber" className="form-control" onChange={(e) => { setEndDate(e.target.value) }} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <label htmlFor="category" className="sr-only">Select Status</label>
              <select className="form-select" aria-label="Default select example" value={value} onChange={handleChange}>
                <option disabled >Select Status</option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Returned">Returned</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-3 search-button" onClick={(e) =>onSubmit(e)} >Search</button>
          {/* <div className="">
           
          </div> */}
        </form>
      </div>
      <hr />
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={search}
          columns={userColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>

    </div>
  )
}

export default Order