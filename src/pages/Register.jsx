import React, { Component } from 'react'
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import { Navigate, Link } from "react-router-dom";




const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const vname = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const vphone = value => {
    if (value.length === 10) {
        return (
            <div className="alert alert-danger" role="alert">
                The phone must be of 10 digit.
            </div>
        );
    }
};
const vpassword = value => {
    if (value.length < 6 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 20 characters.
            </div>
        );
    }
};

export class register1 extends Component {
    

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            successful: false,
            message: ""
        };
    }
    
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleRegister(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.name,
                this.state.email,
                this.state.phone,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true,          
                              
                                        
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    };
    
    

    render() {
        return (
            <>
                <div>
                    <div className="row">
                        {/* form start here  */}
                        <div className="column1">
                            <div className="wrapper">
                                <div className="form_container">
                                    <form onSubmit={this.handleRegister}
                                        ref={c => {
                                            this.form = c;
                                        }} >
                                        <div className="heading">
                                            <h2>Create Your Seller Account</h2>
                                        </div>
                                        {!this.state.successful && (
                                            <>
                                                <div className="form_item">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        // value={name}
                                                        placeholder="Name"
                                                        value={this.state.name}
                                                        onChange={this.onChangeName}
                                                        validations={[required, vname]}
                                                    />
                                                </div>
                                                <div className="form_wrap">
                                                    <div className="form_item">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            // value={email}
                                                            id="email"
                                                            placeholder="Email Address"
                                                            value={this.state.email}
                                                            onChange={this.onChangeEmail}
                                                            validations={[required, email]}
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
                                                            value={this.state.phone}
                                                            onChange={this.onChangePhone}
                                                            validations={[required, vphone]}
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
                                                            // value={password}
                                                            value={this.state.password}
                                                            onChange={this.onChangePassword}
                                                            validations={[required, vpassword]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="btn">
                                                    <input type="submit" value="Sign Up" />
                                                </div></>
                                        )}
                                        <div>
                                            <p style={{ padding: 1 }}>
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
                                        {this.state.message && (
                                            <div className="form-group">
                                                <div
                                                    className={
                                                        this.state.successful
                                                            ? "alert alert-success"
                                                            : "alert alert-danger"
                                                    }
                                                    role="alert"
                                                >
                                                    {this.state.message}
                                                </div>
                                            </div>
                                        )}
                                        <CheckButton
                                            style={{ display: "none" }}
                                            ref={c => {
                                                this.checkBtn = c;
                                            }}
                                        />
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
        )
    }
}

export default register1
