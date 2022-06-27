import { Link } from "react-router-dom";
import "./homepage.css"
import Images from '../../images/index'

export default function Homepage() {
  return (
    <>
 <div className="row mt-5  mb-5">
    <div className="col-lg-4 col-sm-12 col-md-12 section1Image">
      <img src={Images.logo} className="previewImage"/>
    </div>
    <div className="col-lg-4 col-sm-12 col-md-12 header2 ">
      <h1> <strong>Begin Your Selling</strong> </h1>
      <h1> <strong>Journey on</strong></h1>
      <img className="headImage2" src={Images.name} alt=""/>
    </div>
    <div className="col-lg-4 col-sm-12 col-md-12 header3 ">
      <h3 className="f600">Start selling on OPNBOX</h3>
      <div>
        <Link to="/register">
        <button className="btn-lg  registrationBtn" type="button">
          Register Now
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-2"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg></button>
              </Link>
      </div>

    </div>
  </div>
  <div className="row sec2" >
    <h3 className="d-flex  justify-content-center mt-5 mb-5 f600">Why Sell Online</h3>
    <div className="col-lg-4 col-sm-12 col-md-12 section3  mb-4">
      <img className="section3Image " src={Images.sellOne} alt=""/>
     
      <h3  className="mt-5 f600">Growth in the online retail market</h3>
      <p className="mb-0">Witnessing tremendous growth for the past 5 years, </p>
      <p>retailers are moving towards online selling.</p>
      <ul className="homelist">

        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef9356" className="bi bi-check-circle-fill me-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Avoid huge investments
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef9356" className="bi bi-check-circle-fill me-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Large customer base to sell anywhere
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-sm-12 col-md-12 section3  mb-4">
      <img className="section3Image " src={Images.sellTwo} alt=""/>
      <h3 className="mt-5 f500">Get orders across India</h3>
      <p className="mb-0">Receive orders from every part of the country and follow </p>
      <p>the simple steps to fulfill the orders.</p>
      <ul className="homelist">

        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef9356" className="bi bi-check-circle-fill me-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Simple dashboard
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef9356" className="bi bi-check-circle-fill me-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Sale events, advertising and promotions
        </li>
      </ul>
    </div>
    <div className="col-lg-4 col-sm-12 col-md-12 section3 mb-4">
      <img className="section3Image " src={Images.sellThree} alt=""/>
      <h3 className="mt-5 f500">Ship with ease</h3>
      <p className="mb-0">Enjoy easy pick-up and delivery across India, </p>
      <p>with our logistics partner.</p>
      <ul className="homelist">

        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef9356" className="bi bi-check-circle-fill me-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Efficient pick-up network
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef9356" className="bi bi-check-circle-fill me-2"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          Professional packaging support
        </li>
      </ul>
    </div>
  </div>
  <div className="row">
    <h3 className="d-flex justify-content-center mt-5 mb-5 f600" >How to Register</h3>
    <div className="col-lg-4 col-sm-12 col-md-12 section2 ">
      <img className="section2Image" src={Images.Products} alt=""/>
      <h4 className="mt-5 f500">At least 1 product to sell</h4>
      <p className="mb-0">GSTIN details</p>
      <p>product to start selling on Flipkart</p>
    </div>
    <div className="col-lg-4 col-sm-12 col-md-12 section2 ">
      <img className="section2Image" src={Images.gstin} alt=""/>
      <h4 className="mt-5 f500">Cancelled cheque</h4>
      <p className="mb-0">You are required to furnish the details of </p>
      <p>your GSTIN to sell your products</p>
    </div>

    <div className="col-lg-4 col-sm-12 col-md-12  section2 ">
      <img className="section2Image" src={Images.bank} alt=""/>
      <h4 className="mt-5 f500">At least 1 product to sell</h4>
      <p className="mb-0">A copy of the cancelled cheque of your </p>
      <p>bank account is mandatory of registering</p>
    </div>
  </div>
  <div className="row mt-5 mb-5 d-flex justify-content-center ">
    <div className="col d-flex justify-content-center">
      <Link to="/register">
      <button className="btn-lg  registrationBtn" type="button">
        Register Now
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></button>
            </Link>
    </div>
  </div>

  <footer className="site-footer">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 s1">
          <h5>Support</h5>
          <p>support@opnbox.com</p>
          <p>+91 212-970-4133</p>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6  s2">
          <div>
            <h5 className="f500">Download our App </h5>
            <img className="downloadApp" src={Images.appIos}/>
            <img className="downloadApp" src={Images.appAndroid}/>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <p className="copyright-text">&copy; 2022 OPNBOX, All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}