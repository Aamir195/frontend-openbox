import React from 'react'
import { Link } from 'react-router-dom'
import { TabTitle } from '../components/Tabtitle'

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


        </>
    )
}

export default Profile
