import React from 'react'

const [isVerified, setVerified] = useState("");
const [bankId, setBankId] = useState("");
const [addressId, setAddressId] = useState("");
const [businessId, setBussinessId] = useState("");

const Warning = () => {
    return (
        <>
            {/* show this when user is not verfied  */}
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header1">
                            Warning !
                        </div>
                        <hr />
                        <div className="warning-card">
                            <p className="warning-card"> You are not verified ! </p>
                            {
                                (addressId === null) || (bankId === null) || (businessId === null) ?
                                    <>
                                        <p>Please Complete your Profile</p>
                                    </> :
                                    <>
                                        <p>Wait For Some Time To verify Your Account </p>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Warning
