
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    
    const[email, setEmail] =useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate("");

    const login = async () =>{
        console.log(email, password)
        let item = {email, password}

        let result = await fetch("http://localhost:8000/api/vendor/verifyVendor",{
            method :'POST',
            headers :{
                "Content-Type" :"application/json",
                "Accept" :"application/json"
            },
            body: JSON.stringify(item),
        });
        
        result = await result.json();
        localStorage.setItem("user-info", (result));
        navigate('/dashboard', { replace: true });

    }




  return (
    <>
                <div className="wrapper">
                    <div className="form_container">
                        <form  >
                            <div className="heading">
                                <h2>Welcome</h2>
                            </div>
                            <div className="form_wrap">
                                <div className="form_item">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        id='email'
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        id='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        // value={this.state.password}
                                        // onChange={this.onChangePassword}
                                        // validations={[required]}
                                    />
                                </div>
                            </div>  
                            <div className="container mb-3">
                            <div className="col-md-12 text-center .btn-group-justified">
                            <button type="button" className="btn btn-dark" onClick={login}>Login</button>
                                </div>
                           
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

