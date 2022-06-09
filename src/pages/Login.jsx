import React, { useState, useRef }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from 'react-router-dom';
import { CircularProgress, Alert } from '@mui/material';
import CheckButton from "react-validation/build/button";
import { login } from "../actions/auth";

const required = (value) => {
    if (!value) {
      return (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      );
    }
  };

const Login = (props) => {

  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    Navigate('/dashboard')
  }
  return (
   <>
   <div className="wrapper">
        <div className="form_container">
          <form name='form' onSubmit={handleLogin} ref={form}>
            <div className="heading">
              <h2>Welcome</h2>
            </div>

            <div className="form_wrap">
              <div className="form_item">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  id="email"
                  validations={[required]}
                  onChange={onChangeEmail}
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
                  value={password}
                  id="password"
                  validations={[required]}
                  onChange={onChangePassword}
                />
              </div>
            </div>

            <div className="btn">
              <input type="submit" value="Login" disabled={loading}/>
              {loading && (
                <CircularProgress color="success" />
              )}
            </div>
            {message && (
            <div className="form-group">
             <Alert severity="error"> {message}</Alert>
            </div>
          )}
            <div>
              <p>
                Not have a Account
                <Link to="/register"> Register here</Link>
              </p>
            </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
