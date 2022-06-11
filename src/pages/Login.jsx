import React, { useState, useEffect } from "react";




const Login = (props) => {
  

  return (
    <>
      <div className="wrapper">
        <div className="form_container">
          
            <form name='form' >
              <div className="heading">
                <h2>Welcome</h2>
              </div>

              <div className="form_wrap">
                <div className="form_item">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    
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
                    
                    id="password"
                    required

                  />
                  
                </div>
              </div>

              <div className="btn">
                <input type="submit" value="Login"  />
                
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
