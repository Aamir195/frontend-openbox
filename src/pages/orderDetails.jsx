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
        <h4>Summary</h4>
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
        <div className="customer">
          <div className="card">
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
          </div>

        </div>

        <div className="customer">
          <div className="card">

            <div className="card-body">
              <h4 class="card-title">Customer Details </h4>
              <hr />
              <div className="container">
                <div class="row">
                  <div class="col-md-6" >
                    <h5>
                      Customer Name :
                    </h5>
                    <p>Deepak Mishra</p>
                    <h5>
                      Mobile Number :
                    </h5>
                    <p>9867543123</p>
                    <h5>
                      Email Address :
                    </h5>
                    <p>deepakMota@gmail.com</p>
                  </div>
                  <div class="col-md-6" >
                    <h5>
                      Address :
                    </h5>
                    <p>
                      Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.
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

export default orderDetails
