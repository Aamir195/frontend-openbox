import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("");

    const login = async () => {
        console.log(email, password)
        let item = { email, password }

        var result = await axios.post("http://localhost:8000/api/vendor/verifyVendor", {
           email, 
           password 
        });

        var result = await result.data;
        console.log(result)

        var mssg=result.message
      if( mssg=="Incorrect Email."){
        alert("Incorrect email or password ");
      
      }else{
        localStorage.setItem("user-info", result)
        localStorage.setItem("id", (result.id));
        navigate('/dashboard', { replace: true });
      }

        // console.log(result[0].id)
        

    }




    return (
        <>
            <div className="wrapper regularShadow">
                <div className="form_container ">
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
                        {/* <div className="forpass">
                            <Link to="/">
                                <p>Forgot Passwoord</p>
                            </Link>
                        </div> */}
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

// D:\Aamir\ecommerce\final\openbox\src\pages\Login.jsx