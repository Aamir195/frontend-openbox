import React from 'react'

function BussinessDetails() {
  return (
    <>
    <div>
      <div class="row">
        <div className="">
          <h1 className="h1Text">Give your Business Details</h1>
          <div className="formconatiner1">
            <form name="form">
              <div className="formleft">
                <input
                  className="formRadio"
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label for="html">
                  I have a GSTIN I have applied/will apply for a GSTIN
                </label>
                <br />
                <input
                  className="formRadio"
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="CSS"
                />
                <label for="css">
                  I will only sell in GSTIN exempt categories like books
                </label>
                <br />
                <p className="ptext">Your Information</p>
                <div class="form_item">
                  <input type="text" placeholder="GST Number" required />
                </div>
                <div class="form_item">
                  <input type="text" placeholder="Bussiness Name" required />
                </div>
                <div class="form_wrap">
                  <div class="form_item">
                    <input type="text" placeholder="PAN Number" required />
                  </div>
                </div>
                <div class="form_wrap">
                  <div class="form_item">
                    <select name="busiiness-type" id="cars">
                      <option value="Choose Bussiness Type">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="formRight">
                <p className="ptext">Your Bussiness Address </p>
                <div class="form_item">
                  <input type="text" placeholder="Address" required />
                </div>
                <div class="form_wrap">
                  <div class="form_item">
                    <input
                      type="text"
                      placeholder="Street/Locality"
                      required
                    />
                  </div>
                </div>
                <div class="form_custom_column">
                  <div class="form_item" style={{ margin: 2 }}>
                    <input type="text" placeholder="Pincode" required />
                  </div>
                  <div class="form_item">
                    <input type="text" placeholder="City" required />
                  </div>
                </div>
                <div class="form_wrap">
                  <div class="form_item">
                    <input
                      type="text"
                      placeholder="State"
                      required
                    />
                  </div>
                </div>

                <div className="form_wrap">
                  <p className="ptext">Signature</p>
                  <table>
                    <tr>
                      <td>
                        <p>
                          Make sure the signature is visibly large and on a
                          white background. Allowed file formats are
                          .jpg,.jpeg,.png,.pdf. Maximum file size : 20 MB.
                          Seal on the signature not a requirement.
                        </p>
                      </td>
                      <td className="formInput1">
                      <label for="myfile">Select files:</label>
<input type="file" id="myfile" name="myfile" multiple/><br></br>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="btn1">
                  <input type="submit" value="Continue" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BussinessDetails
