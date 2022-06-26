import React from 'react'
// import Ordertable from '../components/orderTable'
import { Link } from 'react-router-dom'
import { DataGrid } from "@mui/x-data-grid";
import { Box } from '@mui/material';


function Order() {
  const columns = [
    {
      field: "id",
      headerName: "SR. No",
      

    },
    {

      headerName: "Order Id",
      field: "orderid",
     

    },
    {
      headerName: "User Name",
      field: "user",
      width: 200,
     

    },
  
    {
      headerName: "Qunatity",
      field: "qunaity",
      width: 200,
     
    },
    {
      headerName: "Total Amount",
      field: "amount",
      width: 200,
     

    },
    {
      headerName: "Date",
      field: "date",
      width: 150,
     

    },
    {
      headerName: "Order Status",
      field: "status",
      width: 200,
      

    },
    
    
  ];
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

  const rows = [
    {
      id: 1,
      sr: '1',
      orderid: "123",
      user: "Faf du plesis",
      giftOrder: 'No',
      qunaity: '5',
      amount: '1234',
      date: '11/12/23',
      status: <><span class="status-p bg-correct">Delivered</span></>,
      
      

    },
    {
      id: 2,
      sr: '2',
      orderid: '123',
      user: 'Faf du plesis',
      giftOrder: 'No',
      qunaity: '5',
      amount: '1234',
      date: '11/12/23',
      status: <><span class="status-p bg-pen">Pending</span></>,
      


    }
  ]
  return (
    <div className='container' >
      <div className="row">
        <nav aria-label="breadcrumb pname">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Order</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <form className="form-inline">
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <div className="form-outline">
                <label className="form-label" htmlFor="typeNumber">Select Start Date</label>
                <input type="date" id="typeNumber" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <div className="form-outline">
                <label className="form-label" htmlFor="typeNumber">Select End Date</label>
                <input type="date" id="typeNumber" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <label htmlFor="category" className="sr-only">Select Status</label>
              <select className="form-select" aria-label="Default select example">
                <option disabled>Select Status</option>
                <option >Delivered</option>
                <option>Pending</option>
                {/* <option value="3">Three</option> */}
              </select>
            </div>
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary mb-3 search-button">Search</button>
            <button type="submit" className="btn btn-primary mb-3 search-button">Show All</button>
          </div>
        </form>
      </div>
      <hr />
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
        /> 
      </Box>
         
    </div>
  )
}

export default Order
