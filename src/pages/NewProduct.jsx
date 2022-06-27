import React from 'react'
import Images from '../images';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

const NewProduct = () => {

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
  let vendor_id = localStorage.getItem('id')

  useEffect(() => {
    //alert(params.id)
    getProductDetailstoadd(params.id);
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
      vendorId: 1,
      quantity: parseInt(quantity),
      price: parseInt(price),
    })
      .then(res => {
        console.log(res.data)
      })

    window.location.reload()

  };


  return (
    <div className="container">
      <div className="edit-card">
        <div className="card">

          <div className="card-body">
            <h5 class="card-title">New Product</h5>
            <div className="row">
              <div className="details">
                <img src={Images.logo} alt="" height={100} />
                <h4 className='pname'>Product Name</h4>
                <h5> {productName}</h5><br />
                <h4>Product Description</h4>
                <p>{productDescription} </p>
              </div>
            </div>
            <div className="row">
              <form className="form-inline">
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="form-group">
                    <div class="form-outline">
                      <label class="form-label" for="typeNumber">Add number of quantity</label>
                      <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} id="typeNumber" class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="form-group">
                    <div class="form-outline">
                      <label class="form-label" for="typeNumber">Price</label>
                      <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} id="typeNumber" class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="details">
                  <button type="submit" className="btn btn-primary mb-3" onClick={(e) => editProductdetails()} > <Link to="/inventory" style={{ textDecoration: 'none', color: '#FFF' }}>Done</Link></button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>


    </div>


  )
}

export default NewProduct