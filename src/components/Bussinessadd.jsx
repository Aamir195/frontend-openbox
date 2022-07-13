import React from 'react'

const Bussinessadd = () => {
    return (
        <>
            <div className="col-6">
                <div className="card p-3 ">
                    <h5 className="my-3">Business Address
                    </h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6"> <span><strong>Lane:</strong></span> </div>
                            <div className="col-6"><span>10880 Malibu Point</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Pincode:</strong></span> </div>
                            <div className="col-6"><span>90265</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>State:</strong></span> </div>
                            <div className="col-6"><span>California</span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"> <span><strong>Country:</strong></span> </div>
                            <div className="col-6"><span>USA</span></div>
                        </div>
                        {/* <div className="d-flex flex-row-reverse mb-2">
                            <button type="button" className="btn btn-primary">Update</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bussinessadd
