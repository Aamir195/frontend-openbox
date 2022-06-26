import React from 'react'
import Images from '../images';

function EditProduct() {
  return (
    <>
      <div className="container">
        <div className="edit-card">
          <div className="card">

            <div className="card-body">
              <h5 class="card-title">Edit Product</h5>
              <div className="row">
                <div className="details">
                  <img src={Images.logo} alt="" height={100} />
                  <h4 className='pname'>Product Name</h4>
                  <h5> IPHONE X</h5><br />
                  <h4>Product Description</h4>
                  <p>IPhone with good Security and Camera. So, Buy this. </p>
                </div>
              </div>
              <div className="row">
                <form className="form-inline">
                  <div className="col-md-6 col-sm-12 mb-2">
                    <div className="form-group">
                      <div class="form-outline">
                        <label class="form-label" for="typeNumber">Add number of quantity</label>
                        <input type="number" id="typeNumber" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 mb-2">
                    <div className="form-group">
                    <div class="form-outline">
                        <label class="form-label" for="typeNumber">Price</label>
                        <input type="number" id="typeNumber" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="details">
                    <button type="submit" className="btn btn-primary mb-3">Done</button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>


      </div>


    </>
  )
}

export default EditProduct
