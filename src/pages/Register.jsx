// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { isEmail } from "validator";
// import { register } from "../actions/auth";
// import CheckButton from "react-validation/build/button";
// import { Alert } from "@mui/material";

// const required = (value) => {
//   if (!value) {
//     return <Alert severity="error">This Field is required !</Alert>;
//   }
// };
// // for email
// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return <Alert severity="error">This is not a valid email.</Alert>;
//   }
// };
// // for name
// const vname = (value) => {
//   if (value.length < 2 || value.length > 20) {
//     return (
//       <Alert severity="error">
//         {" "}
//         The username must be between 2 and 20 characters.
//       </Alert>
//     );
//   }
// };
// // for password
// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <Alert severity="error">
//         {" "}
//         The password must be between 6 and 40 characters.
//       </Alert>
//     );
//   }
// };

// const Register =() => {
//   const form = useRef();
//   const checkBtn = useRef();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [successful, setSuccessful] = useState(false);
//   const { message } = useSelector((state) => state.message);
//   const dispatch = useDispatch();
//   const onChangename = (e) => {
//     const name = e.target.value;
//     setName(name);
//   };
//   const onChangeEmail = (e) => {
//     const email = e.target.value;
//     setEmail(email);
//   };
//   const onChangePhone = (e) => {
//     const phone = e.target.value;
//     setPhone(phone);
//   };
//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };
//   const handleRegister = (e) => {
//     e.preventDefault();
//     setSuccessful(false);
//     form.current.validateAll();
//     if (checkBtn.current.context._errors.length === 0) {
//       dispatch(register(name, email, phone, password))
//         .then(() => {
//           setSuccessful(true);
//           <Link to="/pickup-address"></Link>;
//         })
//         .catch(() => {
//           setSuccessful(false);
//         });
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="row">
//           {/* form start here  */}
//           <div className="column1">
//             <div className="wrapper">
//               <div className="form_container">
//                 <form name="form" onSubmit={handleRegister} ref={form}>
//                   {!successful && (
//                     <>
//                       <div className="heading">
//                         <h2>Create Your Seller Account</h2>
//                       </div>
//                       <div className="form_item">
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={name}
//                           placeholder="Name"
//                           onChange={onChangename}
//                           validations={[required, vname]}
//                           required
//                         />
//                       </div>
//                       <div className="form_wrap">
//                         <div className="form_item">
//                           <input
//                             type="email"
//                             name="email"
//                             value={email}
//                             id="email"
//                             placeholder="Email Address"
//                             required
//                             onChange={onChangeEmail}
//                             validations={[required, validEmail]}
//                           />
//                         </div>
//                       </div>
//                       <div className="form_wrap">
//                         <div className="form_item">
//                           <input
//                             value={phone}
//                             name="phone"
//                             id="phone"
//                             type="tel"
//                             placeholder="Phone"
//                             maxLength="10"
//                             required
//                             onChange={onChangePhone}
//                             validations={[required]}
//                           />
//                         </div>
//                       </div>
//                       <div className="form_wrap">
//                         <div className="form_item">
//                           <input
//                             type="password"
//                             placeholder="Password"
//                             name="password"
//                             id="password"
//                             value={password}
//                             required
//                             onChange={onChangePassword}
//                             validations={[required, vpassword]}
//                           />
//                         </div>
//                       </div>
//                     </>
//                   )}
//                   {message && (
//                     <div className="form-group">
//                       <Alert severity={
//                           successful
//                             ? "success"
//                             : "error"}>{message}
//                       </Alert>
//                     </div>
//                   )}
//                   <div>
//                     <p style={{ padding: 1 }}>
//                       By filling this form, I agree to ?
//                       <Link to="/"> Term & Condition</Link>
//                     </p>
//                   </div>
//                   <div className="btn">
//                     <input type="submit" value="Sign Up" />
//                   </div>
//                   <div>
//                     <p>
//                       Already a seller?
//                       <Link to='/login'> Login here</Link>
//                     </p>
//                   </div>
//                   <CheckButton style={{ display: "none" }} ref={checkBtn} />
//                 </form>
//               </div>
//             </div>
//           </div>
//           {/* form ends here  */}

//           <div className="vertical"></div>

//           <div className="column2">
//             <h2 className="forh2">
//               Sell to millions of customers on Shopperspot, Right from your
//               doorstep!
//             </h2>
//             <p>All you need to sell on Shopperspot is </p>
//             <div className="content2">
//               <div className="content1">
//                 {/* <img className="imgd" src={Doc} alt="" /> */}
//                 <p className="ptext">GSTIN*</p>
//               </div>
//               <div className="content1 middleContent">
//                 {/* <img className="imgd" src={Cheque} alt="" /> */}
//                 <p className="ptext">Bank Account</p>
//               </div>
//               <div className="content1">
//                 {/* <img className="imgd" src={Shoe} alt="" /> */}
//                 <p className="ptext">Products to sell</p>
//               </div>
//             </div>
//             <p className="ptext">
//               *GSTIN is not required for sellers who only sell books{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;
