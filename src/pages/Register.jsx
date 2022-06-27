import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Images from '../images/index'
const URL = 'http://localhost:8000/api/vendor/addVendor'


export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [regid, setRegid] = useState('')


    const onRegister = async (e) => {
        e.preventDefault();
        console.log(name, email, phone, password);
        
            const resp = await axios.post(URL, {
                 name,
                 email,
                 phone,
                 password
            });
            // console.log(resp.data);
            var result = await resp.data
            setRegid(result.id)
            console.log(result.id)
            // console.log(result.data)
            // console.log(result.data.id)
            // console.log(result["id"]);
            localStorage.setItem("user-info", result);
            localStorage.setItem("id", (result.id));
            // console.log(result.id)
            navigate('/pickup-address', { replace: true })

    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="parent">
                        {/* form start here  */}
                        <div className="column1">
                            <div className="wrapper">
                                <div className="form_container">
                                    <form onSubmit={onRegister}
                                    >
                                        <div className="heading">
                                            <h2>Create Your Seller Account</h2>
                                        </div>
                                        <div className="form_wrap">
                                            <div className="form_item">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    // value={name}
                                                    placeholder="Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required

                                                />
                                            </div>
                                        </div>
                                        <div className="form_wrap">
                                            <div className="form_item">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    // value={email}
                                                    id="email"
                                                    placeholder="Email Address"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form_wrap">
                                            <div className="form_item">
                                                <input
                                                    // value={phone}
                                                    name="phone"
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="Phone"
                                                    maxLength="10"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form_wrap">
                                            <div className="form_item">
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    required
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="btn">
                                            <input type="submit" value="Sign Up" />
                                        </div>

                                        <div>
                                            <p className='test'>
                                                By filling this form, I agree to ?
                                                <Link to="/"> Term & Condition</Link>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Already a seller?
                                                <Link to='/login'> Login here</Link>
                                            </p>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* form ends here  */}
                        {/* <div className="vertical"></div> */}
                        <div className="column2">
                            <h2 className="forh2">
                                Sell to millions of customers on Shopperspot, Right from your
                                doorstep!
                            </h2>
                            <p>All you need to sell on Shopperspot is </p>
                            <div className="content2">
                                <div className="content1">
                                    <img className="imgd" src={Images.Docs} alt="" />
                                    <p className="ptext">GSTIN*</p>
                                </div>
                                <div className="content1 middleContent">
                                    <img className="imgd" src={Images.cheque} alt="" />
                                    <p className="ptext">Bank Account</p>
                                </div>
                                <div className="content1">
                                    <img className="imgd" src={Images.shoes} alt="" />
                                    <p className="ptext">Products to sell</p>
                                </div>
                            </div>
                            <p className="ptext">
                                *GSTIN is not required for sellers who only sell books{" "}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
