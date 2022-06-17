import React from 'react'
// import Ordertable from '../components/orderTable'
import { Link } from 'react-router-dom'

function Order() {
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
        
      </div>
    </div>

  )
}

export default Order
