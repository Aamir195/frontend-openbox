import React from 'react'

function PickupAddress() {
  return (
    <div className="row">
      {/* form start here  */}
      <div className="column1">
        <div class="wrapper">
          <div class="form_container">
            <form name="form">
              <div class="heading">
                <h2>Give your pickup address</h2>
              </div>
              <div class="form_item">
                <input type="text" placeholder="Area" required />
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <input type="text" placeholder="Pin Code" required />
                </div>
              </div>

              <div class="form_wrap">
                <div class="form_item">
                  <input type="text" placeholder="City" required />
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <input type="text" placeholder="State" required />
                </div>
              </div>
              <div class="form_wrap">
                <div class="form_item">
                  <input type="text" placeholder="Country" required />
                </div>
              </div>
              
              <div class="btn">
                <input type="submit" value="Sign Up" />
              </div>
              
            </form>
          </div>
        </div>
      </div>
      {/* form ends here  */}
      </div>
  )
}

export default PickupAddress
