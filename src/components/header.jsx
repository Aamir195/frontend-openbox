import React from 'react'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '../images/index'

function Navbar() {
  return (

    <section className="navigation fixed-top">
  <div className="nav-container ">
    <div className="brand">
      <a href="/home">
        <img src={Images.nameIcon} alt=""
        height={35} />
      </a>
    </div>
    <nav>
      <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul className="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        {/* <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Services</a>
          <ul className="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Portfolio</a>
        </li>
        <li>
          <a href="#!">Category</a>
          <ul className="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to ='/Register'>Register</Link>
        </li>
      </ul>
    </nav>
  </div>
</section>



  )
}

export default Navbar
