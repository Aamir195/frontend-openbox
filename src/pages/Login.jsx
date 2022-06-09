import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { Alert, CircularProgress } from "@mui/material";



const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        props.history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Link to='/dashboard'></Link>
  }

  return (
    <>
      <div className="wrapper">
        <div className="form_container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
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
                    
                    id="email"
                    required

                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
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
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
              </div>

              <div className="btn">
                <input type="submit" value="Login" disabled={loading} />
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

            </form>
          </Formik>
        </div>
        {message && (
          <div className="form-group">
            <Alert severity="error">{message}</Alert>

          </div>
        )}
      </div>
    </>
  )
}

export default Login
