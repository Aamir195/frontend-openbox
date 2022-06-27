import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'react-data-table-component-extensions/dist/index.css';
import { Box } from '@mui/material';
import EditProduct from './EditProduct';
// import "./inventory.scss"
// import { useNavigate, Link } from "react-router-dom";


const url = 'http://localhost:9000/api/list/getAllProduct'

function Inventory() {
  // const naviagte = useNavigate();
  const [product, setProduct] = useState([]);
  let vendor_id = localStorage.getItem('id');
  console.log(vendor_id);

  useEffect(() => {
   fetchProduct(vendor_id);
  }, []);

  const fetchProduct = async (id) => {
    var result = await axios.post(url, {
     id:1
    })
    var temp = await result.data
    console.log(temp);
    setProduct(temp)
   
  };

  async function handleEdit (id){
 
   //alert("edit: "+id)
    return(
      <div>
        <EditProduct />
      </div>
      
    )
  }
  async function handleDelete(id) {
    if (window.confirm("Want to delete?")) {
      setProduct(product.filter((item) => item.id !== id));

      let del = await axios.post(
        "http://localhost:9000/api/list/deleteListById",
        { id }
      );

      del = await del.json();
      console.log(del);
      window.location.reload()
    }
  }

  const userColumns = [
    { field: "id", headerName: "productID", width: 170 },
    { field: "productName", headerName: "productName", width: 400 },
    { field: "quantity", headerName: "quantity", width: 200 },
    { field: "price", headerName: "price", width: 230 },
  ];
  


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/inventory/edit/"+params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton"
              onClick={() => handleEdit(params.row.id)}>Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            
          </div>
        );
      },
    },
  ];


  

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <h3>
              Your Listed Product  {vendor_id}
            </h3>
          </div>
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
              className="datagrid"
              rows={product}
              columns={userColumns.concat(actionColumn)}
              pageSize={8}
              rowsPerPageOptions={[10]}
            //checkboxSelection
            />
      </Box>
         
            
         
        </div>
      </div>
      

    </>
  )
}

export default Inventory
