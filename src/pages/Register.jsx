import React, { useState, useRef } from "react";


const required = (value) => {
    if (!value) {
        return <Alert severity="error">This Field is required !</Alert>;
    }
};


const Register = () => {
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div>
                <div className="row">
                    {/* form start here  */}
                    <div className="column1">
                        <div className="wrapper">
                            <div className="form_container">
                                <form name="form" onSubmit={handleRegister} >
                                <div className="heading">
                                                <h2>Create Your Seller Account</h2>
                                            </div>
                                            <div className="form_item">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={name}
                                                    placeholder="Name"
                                                    onChange={onChangename}
                                                    validations={[required]}
                                                    required
                                                />
                                            </div>
                                            <div className="form_wrap">
                                                <div className="form_item">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={email}
                                                        id="email"
                                                        placeholder="Email Address"
                                                        required
                                                        onChange={onChangeEmail}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form_wrap">
                                                <div className="form_item">
                                                    <input
                                                        value={phone}
                                                        name="phone"
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="Phone"
                                                        maxLength="10"
                                                        required
                                                        onChange={onChangePhone}
                                                        validations={[required]}
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
                                                        onChange={onChangePassword}
                                                        validations={[required]}
                                                    />
                                                </div>
                                            </div>
                                    
                                    <div>
                                        <p style={{ padding: 1 }}>
                                            By filling this form, I agree to ?
                                            <Link to="/"> Term & Condition</Link>
                                        </p>
                                    </div>
                                    <div className="btn">
                                        <input type="submit" value="Sign Up" />
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

                    <div className="vertical"></div>

                    <div className="column2">
                        <h2 className="forh2">
                            Sell to millions of customers on Shopperspot, Right from your
                            doorstep!
                        </h2>
                        <p>All you need to sell on Shopperspot is </p>
                        <div className="content2">
                            <div className="content1">
                                {/* <img className="imgd" src={Doc} alt="" /> */}
                                <p className="ptext">GSTIN*</p>
                            </div>
                            <div className="content1 middleContent">
                                {/* <img className="imgd" src={Cheque} alt="" /> */}
                                <p className="ptext">Bank Account</p>
                            </div>
                            <div className="content1">
                                {/* <img className="imgd" src={Shoe} alt="" /> */}
                                <p className="ptext">Products to sell</p>
                            </div>
                        </div>
                        <p className="ptext">
                            *GSTIN is not required for sellers who only sell books{" "}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;