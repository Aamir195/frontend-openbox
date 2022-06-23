import React from 'react'
// import Ordertable from '../components/orderTable'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions'
import "react-data-table-component-extensions/dist/index.css";

function Order() {
  const columns = [
        {
            name: "Sr no.",
            selector: "sr",
            sortable: "true"
        },
        {
    
            name: "Order Id",
            selector: "orderid",
            sortable: true
        },
        {
            name: "User Name",
            selector: "user",
            sortable: true
        },
        {
            name: "Gift Order",
            selector: "giftOrder",
            sortable: true,
            //   cell: d => <span>{d.genres.join(", ")}</span>
        },
        {
            name: "Qunatity",
            selector: "qunaity",
            sortable: true
        },
        {
            name: "Total Amount",
            selector: "amount",
            sortable: true
        }, {
            name: "Date",
            selector: "date",
            sortable: true
        },
        {
            name: "Order Status",
            selector: "status",
            sortable: true
        },
        {
            name: "Summary",
            selector: "summary",
            sortable: true
        },
        {
            name: "Invoice",
            selector: "invoice",
            sortable: true
        },
        {
            name: "WayBill",
            selector: "waybill",
            sortable: true
        },
    ];

const data = [
  {
    id :1,
    sr :'1',
    orderid : '123',
    user : 'Faf du plesis',
    giftOrder : 'No',
    qunaity :'5',
    amount : '1234',
    date : '11/12/23',
    status : <><span class="status-p bg-correct">Delivered</span></>,
    summary :"summery",
    invoice : 'invoice',
    waybill : '-'

  },
  {
    id :1,
    sr :'1',
    orderid : '123',
    user : 'Faf du plesis',
    giftOrder : 'No',
    qunaity :'5',
    amount : '1234',
    date : '11/12/23',
    status : <><span class="status-p bg-pen">Pending</span></>,
    summary :"summery",
    invoice : 'invoice',
    waybill : '-'


  }
]    
  return (
    <div className='container' >
      <div className="row">
        <nav aria-label="breadcrumb pname">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to='/dashboard'>Dashboard</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Order</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <form className="form-inline">
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <div class="form-outline">
                <label class="form-label" for="typeNumber">Select Start Date</label>
                <input type="date" id="typeNumber" class="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <div class="form-outline">
                <label class="form-label" for="typeNumber">Select End Date</label>
                <input type="date" id="typeNumber" class="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-2">
            <div className="form-group">
              <label for="category" className="sr-only">Select Status</label>
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>Select Status</option>
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
      <div className="row">
        <DataTableExtensions columns ={columns} data ={data} >
          <DataTable 
          columns={columns}
          data = {data}
          pagination/>
        </DataTableExtensions>

      </div>
    </div>

  )
}

export default Order
