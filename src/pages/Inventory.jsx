import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'react-data-table-component-extensions/dist/index.css';
import { Box } from '@mui/material';
import EditProduct from './EditProduct';
// import "./inventory.css"
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// import { useNavigate, Link } from "react-router-dom";
import { TabTitle } from '../components/Tabtitle'

const url = 'http://localhost:8000/api/list/getAllProduct'

function Inventory() {
  TabTitle('Inventory - OpenBox.IN')

  const RedSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: red[900],
      '&:hover': {
        backgroundColor: alpha(red[900], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: red[900],
    },
  }));

  async function handleStatus(id) {
    status(id)
    window.location.reload()
  }

  const status = async (id) => {

    let del = await axios.post(
      "http://localhost:8000/api/list/editStatus",
      {
        id,
        vendorId: vendor_id
      }
    );
  };
  // const naviagte = useNavigate();
  const [product, setProduct] = useState([]);
  let vendor_id = localStorage.getItem('id');
  console.log(vendor_id);

  useEffect(() => {
    fetchProduct(vendor_id);
  }, []);

  const fetchProduct = async (vendor_id) => {
    var result = await axios.post(url, {
      id: vendor_id /// changed it
    })
    var temp = await result.data
    console.log(temp);
    setProduct(temp)
  };

  async function handleEdit(id) {

    //alert("edit: "+id)
    return (
      <div>
        <EditProduct />
      </div>

    )
  }
  async function handleDelete(id) {
    if (window.confirm("Want to delete?")) {
      setProduct(product.filter((item) => item.id !== id));

      let del = await axios.post(
        "http://localhost:8000/api/list/deleteListById",
        {
          id,
          vendorId: vendor_id
        }
      );

      del = await del.json();
      console.log(del);
      window.location.reload()
    }
  }




  const userColumns = [
    { field: "id", headerName: "productID", width: 170 },
    { field: "productName", headerName: "productName", width: 300 },
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
            <Link to={"/inventory/edit/" + params.row.id} style={{ textDecoration: "none" }}>
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

  const actionStatus = [{
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellAction" >
          <RedSwitch checked={params.row.isActive == 0 ? true : false} onClick={() => handleStatus(params.row.id)} inputProps={{ 'aria-label': 'controlled' }} />
          <label >Disable</label>
        </div>
      )
    }
  }];




  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 ">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Inventory</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="row mb-2">
            <h3>
              Your Listed Product  {vendor_id}
            </h3>
          </div>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              className="datagrid"
              rows={product}
              columns={userColumns.concat(actionColumn).concat(actionStatus)}
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
