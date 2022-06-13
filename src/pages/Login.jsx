import React, { Component } from 'react'
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";
import { Link } from 'react-router-dom'

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

export class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleLogin(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    this.props.history.push("/dashboard");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="form_container">
                        <form onSubmit={this.handleLogin}
                            ref={c => {
                                this.form = c;
                            }} >
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
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        validations={[required]}
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
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required]}
                                    />
                                </div>
                            </div>
                            <div className="btn">
                                <input type="submit" value="Login" disabled={this.state.loading} />
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                            </div>
                            <div>
                                <p>
                                    Not have a Account
                                    <Link to="/register"> Register here</Link>
                                </p>
                            </div>
                            {this.state.message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
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
            </>
        )
    }
}

export default Login


