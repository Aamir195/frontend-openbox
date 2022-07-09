import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '../images/index'
// import { Nav, Navbar } from 'react-bootstrap'


function Navigationbar() {

  let user = localStorage.getItem("user-info")
  console.log(user);
  let navigate = useNavigate();

  const logout = (e) => {
    localStorage.removeItem("user-info");
    navigate("/login")
  }

  return (

    <section className="navigation sticky-top">
      <div className="nav-container ">
        <div className="brand">
          <a href="/">
            <img src={Images.nameIcon2} alt=""
              height={40} />
          </a>
        </div>

        <nav>

          <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
          <ul className="nav-list">
            {
              localStorage.getItem("user-info") ?
                <>
                  <li>
                    <Link className={({ isActive }) => (isActive ? "link-active" : "link")} to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/list-product">Product List</Link>
                  </li>
                  <li>
                    <Link to='/inventory'>Inventory</Link>
                  </li>
                  <li>
                    <Link to='/order'>Order</Link>
                  </li>
                  <li>
                    <Link to='/profile'>Profile</Link>
                  </li>
                  <li onClick={(e) => logout(e)} >
                    <div>Logout</div>
                  </li>
                </> :
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
            }
          </ul>
        </nav>
      </div>
    </section>






  )
}

export default Navigationbar
