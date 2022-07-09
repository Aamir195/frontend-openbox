import React from 'react'
import Images from '../images';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { TabTitle } from '../components/Tabtitle';

const NewProduct = () => {

  TabTitle('New Product - OpenBox.IN')

  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [productName, setProductname] = useState("")
  const [productDescription, setProductdescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [color, setColor] = useState([]);
  const [highlightFeature, setFeature] = useState("")
  const [subcategoryIcon, setImage] = useState("");
  const [isadded, setIsadded] = useState("");
  let vendor_id = localStorage.getItem('id')

  useEffect(() => {
    //alert(params.id)
    getProductDetailstoadd(params.id);
    addedStatus(params.id, vendor_id)
  }, [])

  const getProductDetailstoadd = async (id) => {

    var result = await axios.post('http://localhost:8000/api/product/getProduct',
      { id })
    var result = await result.data

    setProductname(result[0].productName);
    console.log(result[0].productName)

    setProductdescription(result[0].productDescription);
    console.log(result[0].productDescription)

    setImage(result[0].image);
    console.log(result[0].image)

  }

  const editProductdetails = async () => {

    axios.post("http://localhost:9000/api/list/listProduct", {
      productId: params.id,
      vendorId: vendor_id,
      quantity: parseInt(quantity),
      price: parseInt(price),
    })
      .then(res => {
        console.log(res.data)
      })

    window.location.reload()

  };

  // for getting the added product status (true or false)
  async function addedStatus(productId, vendor_id) {
    var status = await axios.post("http://localhost:9000/api/list/getProductAddedStatus", {
      productId: params.id,
      vendorId: vendor_id
    });
    status = await status.data;
    setIsadded(status.result);
    console.log(isadded);
    // alert(isadded);

  }

  //for preventing the negative number in input field 
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };
  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 ">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard">List Product</Link></li>
              <li className="breadcrumb-item active" aria-current="page">New Product</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="edit-card">
        <div className="card">

          <div className="card-body">
            <h5 className="card-title">New Product</h5>
            <div className="row">
              <div className="details">
                <img src={Images.logo} alt="" height={100} />
                <h4 className='pname'>Product Name</h4>
                <h5> {productName}</h5><br />
                <h4>Product Description</h4>
                <p>{productDescription} </p>
              </div>
            </div>
            {
              isadded == true ? <>
                <p className='warning-text' >You have already added this product. Please check your <Link to='/inventory'>inventory</Link>.</p>
              </>
                :
                <>
                  <div className="row">
                    <form className="form-inline">
                      <div className="col-md-6 col-sm-12 mb-2">
                        <div className="form-group">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="typeNumber">Add number of quantity</label>
                            <input type="number" min={0} onPaste={preventPasteNegative}
                              onKeyPress={preventMinus} value={quantity} onChange={(e) => { setQuantity(e.target.value) }} id="typeNumber" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 mb-2">
                        <div className="form-group">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="typeNumber">Price</label>
                            <input type="number" min={0.01} onPaste={preventPasteNegative}
                              onKeyPress={preventMinus} value={price} onChange={(e) => { setPrice(e.target.value) }} id="typeNumber" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <button type="submit" className="btn btn-primary mb-3" onClick={(e) => editProductdetails()} > <Link to="/inventory" style={{ textDecoration: 'none', color: '#FFF' }}>Done</Link></button>
                      </div>

                    </form>
                  </div>
                </>
            }

          </div>
        </div>

      </div>


    </div>


  )
}

export default NewProduct