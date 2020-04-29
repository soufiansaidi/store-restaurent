import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import PageCover from './../Includes/PageCover'

import { IoIosArrowForward } from "react-icons/io";

const BranchesDetails = () => {
    return (
        <>
            <Header />
            
            <PageCover />

            <section>
                <div className="container branches-details-page mb-4 pb-5">
                    <h2 className="text-uppercase title">Al Grain</h2>
                    <ul className="list-group">
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Monday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Tuesday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Wednesday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Thursday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Friday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Saturday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                        <li className="list-group-item px-0 py-3 border-left-0 border-right-0 d-flex justify-content-between align-items-center">
                            Sunday
                            <div className="timing">08:30-12:30 &nbsp;&nbsp; 16:30-22:00</div>
                        </li>
                    </ul> 
                
                    <div className="start-ordering d-flex align-items-center align-content-between">
                        <div className="col-6"><Link className="w-100 rounded text-uppercase" to="/login">Call</Link></div>
                        <div className="col-6"><Link className="w-100 rounded text-uppercase" to="/login">Directions</Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BranchesDetails