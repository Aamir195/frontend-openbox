import React from 'react'
import { Link } from 'react-router-dom'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '../images/index'

function Navbar() {
  return (

    <section className="navigation sticky-top">
      <div className="nav-container ">
        <div className="brand">
          <a href="/home">
            <img src={Images.nameIcon} alt=""
              height={40} />
          </a>
        </div>
        <nav>
          <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
          <ul className="nav-list">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/list-product">Product List</Link>
            </li>
            <li>
              <Link to='/inventory'>Inventory</Link>
            </li>
            <li>
              <Link to='/Register'>Order</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>



  )
}

export default Navbar
