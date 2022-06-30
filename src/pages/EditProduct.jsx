import React from 'react'
import Images from '../images';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { TabTitle } from '../components/Tabtitle';

const EditProduct = () => {

  TabTitle('Edit Product - OpenBox.IN')

  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [productName, setProductname] = useState("")
  const [productDescription, setProductdescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState("")
  const [subcategoryIcon, setImage] = useState("");
  let vendor_id = localStorage.getItem('id')

  useEffect(() => {
    getProductDetails(vendor_id, params.id);
  }, [])

  const getProductDetails = async (vendor_id, product_id) => {

    var result = await axios.post('http://localhost:9000/api/list/getProductDetailsById',
      {
        productId: product_id,
        vendorId: vendor_id
      })
    var result = await result.data

    setProductname(result[0].productName);
    console.log(result[0].productName)

    setProductdescription(result[0].productDescription);
    console.log(result[0].productDescription)

    setImage(result[0].image);
    console.log(result[0].image)

    setQuantity(result[0].quantity);
    console.log(result[0].quantity)

    setPrice(result[0].price);
    console.log(result[0].price)

    setDiscount(result[0].discount);
    console.log(result[0].discount)



  }

  const editProductdetails = async () => {

    axios.post("http://localhost:9000/api/list/addQuantityofProduct", {
      productId: params.id,
      vendorId: vendor_id,
      addQuantity: parseInt(quantity),
      price: parseInt(price),
    })
      .then(res => {
        console.log(res.data)
      })

    window.location.reload()

  };


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 ">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard">Inventory</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Edit Product</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="edit-card">
        <div className="card">

          <div className="card-body ">
            <h5 class="card-title">Edit Product</h5>

            <div className="row p-2">
              <div className="col-4 d-flex flex-row-reverse align-items-center ">
                <img className='img-thumbnail' src={Images.logo} alt="" width={300} height={300} />
              </div>
              <div className="col-8 border rounded-2 p-3 ">
                <h5> {productName} </h5><br />
                <div className="row">
                  <div className="col">

                    <h4>Product Description</h4>
                    <div>
                      {productDescription}
                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="row">
              <form className="form-inline">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <div className="form-group">
                    <div class="form-outline">
                      <label class="form-label" for="typeNumber">Add number of quantity</label>
                      <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} id="typeNumber" class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <div className="form-group">
                    <div class="form-outline">
                      <label class="form-label" for="typeNumber">Price</label>
                      <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} id="typeNumber" class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <div className="form-group">
                    <div class="form-outline">
                      <label class="form-label" for="typeNumber">Discount</label>
                      <input type="number" value={discount} onChange={(e) => { setDiscount(e.target.value) }} id="typeNumber" class="form-control" />
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

export default EditProduct