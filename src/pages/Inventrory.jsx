import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'react-data-table-component-extensions/dist/index.css';
// import { useNavigate, Link } from "react-router-dom";


const url = 'http://localhost:8000/api/list/getAllProduct'

function Inventrory() {
  // const naviagte = useNavigate();
  const [product, setProduct] = useState('');

  useEffect(() => {
    fetchProduct();
  }, []);

  let id = localStorage.getItem('id');
  console.log(id);

  const fetchProduct = async (e) => {
    var result = await axios.post(url, {
     id : 1
    })
    var temp = await result.data
    console.log(temp);
    setProduct(temp)



  };
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productName", headerName: "productName", width: 200 },
    {
      field: "productDescription",
      headerName: "productDescription",
      width: 200,
    },
    { field: "quantity", headerName: "Quantity", width: 350 },
    { field: "highlightFeature", headerName: "highlightFeature", width: 300 },
    //{ field: "description", headerName: "Description", width: 400}
  ]; const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/subcategary/view/" + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Add To sell</div>
            </Link>
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
              Your Listed Product  {id}
            </h3>
          </div>
         
            
         
        </div>
      </div>
      <DataGrid
              className="datagrid"
              rows={product}
              columns={userColumns.concat(actionColumn)}
              pageSize={8}
              rowsPerPageOptions={[10]}
            //checkboxSelection
            />

    </>
  )
}

export default Inventrory
