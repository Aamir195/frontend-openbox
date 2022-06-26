import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'
import { padding } from '@mui/system';

function orderDetails() {
  const columns = [
    {
      field: 'id',
      headerName: "SR No.",
    },
    {
      field: 'productName',
      headerName: "Product Name",
      width: 250
    },
    {
      field: 'quantity',
      headerName: "Quantity",
      flex: 1
    },
    {
      field: 'unitAmount',
      headerName: "Unit Amount",
      flex: 1
    },
    {
      field: 'netAmount',
      headerName: "Net Amount",
      flex: 1
    },

    {
      field: 'cgst',
      headerName: "CGST",
      flex: 1
    },
    {
      field: 'sgst',
      headerName: "SGST",
      flex: 1
    },
    {
      field: 'igst',
      headerName: "IGST",
      flex: 1
    },
    {
      field: 'totalAmount',
      headerName: "Total Amount",
      flex: 1
    },
  ];

  const rows = [
    {
      id: "1",
      productName: "AMala Hair Oil",
      quantity: "3",
      unitAmount: "2300",
      netAmount: "23000",
      cgst: "12.8 %",
      sgst: "12.8 %",
      igst: "-",
      totalAmount: "23000"

    },
    {
      id: "2",
      productName: "AMala Hair Oil",
      quantity: "13",
      unitAmount: "2300",
      netAmount: "23000",
      cgst: "12.8 %",
      sgst: "12.8 %",
      igst: "-",
      totalAmount: "23000"

    }
  ]



  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb pname">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
            <li className="breadcrumb-item"><Link to='/order'>Order</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Order Detail</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <h2>Summary</h2>
      </div>
      <div className="row">
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
        <div class="container1">
          <div class="column-1 box">
            <h1>ggggg em Ipsum?</h1>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged
            </p>
          </div>
          <div class="column-2 box">
            <h1>What is Lorem Ipsum?</h1>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default orderDetails
