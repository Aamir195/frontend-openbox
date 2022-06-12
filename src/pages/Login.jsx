import React, { useState } from "react";
// import Alert from "@mui/material/Alert"
import axios from "axios";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

// const required = (value) => {
//   if (!value) {
//     return <Alert severity="error">This Field is required !</Alert>;
//   }
// };


const Login = () => {

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [naviagte, setNaviagte] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();

   const response = await axios.post('vendor/verifyVendor', {
     
      email,
      password
    }, {withCredentials : true});

    // setNaviagte(true);
    console.log(response.data);
  }
  if (naviagte) {
    return <Navigate to='/dashboard' />;
  }




  return (
    <>
      <div className="wrapper">
        <div className="form_container">

          <form name='form' onSubmit={handleLogin} >
            <div className="heading">
              <h2>Welcome</h2>
            </div>

            <div className="form_wrap">
              <div className="form_item">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={e => setEmail(e.target.value) }
                  id="email"
                  required

                />

              </div>
            </div>
            <div className="forpass">
              <Link to="/">
                <p>Forgot Passwoord</p>
              </Link>
            </div>
            <div className="form_wrap">
              <div className="form_item">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={e => setPassword(e.target.value) }
                  id="password"
                  required

                />

              </div>
            </div>

            <div className="btn">
              <input type="submit" value="Login" />

            </div>

            <div>
              <p>
                Not have a Account
                <Link to="/register"> Register here</Link>
              </p>
            </div>

          </form>

        </div>

      </div>
    </>
  )
}

export default Login
