// import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { TabTitle } from '../components/Tabtitle';
import Pickupadd from '../components/pickupaddress';
import Bussinessadd from '../components/Bussinessadd';
import Bussiness from '../components/Bussiness';
import Bank from '../components/bank';
import Vendor from '../components/Vendor';


const Profile = () => {
    TabTitle('Profile - OpenBox.IN')

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 ">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <Vendor/>

                        <div className="row m-3">
                            <Pickupadd />
                            <Bussinessadd/>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row ">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="row m-3 ">
                            <Bussiness/>
                            <Bank/>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>

            </div>


        </>
    )
}

export default Profile
