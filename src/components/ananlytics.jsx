import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTruck } from '@fortawesome/free-solid-svg-icons'

function Ananlytics() {
  return (
    <div className="rowClass">
    <div className="row">
      <div>
        <h2>Analytics</h2>
      </div>
      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-blue order-card">
          <div className="card-block">
            <h6 className="m-b-20">Orders Received</h6>

            <h2 className="text-right"> <FontAwesomeIcon icon={faCartShopping} /> <span>486</span></h2>
            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-green order-card">
          <div className="card-block">
            <h6 className="m-b-20">Orders Received</h6>
            <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span>486</span></h2>
            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-yellow order-card">
          <div className="card-block">
            <h6 className="m-b-20">Orders Deliverd</h6>
            <h2 className="text-right"><FontAwesomeIcon icon={faTruck} /> <span>86</span></h2>
            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
          </div>
        </div>
      </div>

      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-pink order-card">
          <div className="card-block">
            <h6 className="m-b-20">Total Earning</h6>
            <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>₹ 486</span></h2>
            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ananlytics
