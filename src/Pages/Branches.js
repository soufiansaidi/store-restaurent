import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import PageCover from './../Includes/PageCover'

import { IoIosArrowForward } from "react-icons/io";

const Brachers = () => {
    return (
        <>
            <Header />
            
            <PageCover />

            <section>
                <div className="container branches-page pb-5 mb-4">
                    <h2 className="text-uppercase title">Branches</h2>
                    <ul class="list-group">
                        <li class="list-group-item p-0 border-left-0 border-right-0">
                            <Link to="/branches-details" className="color-primary py-2 d-flex justify-content-between align-items-center">Al Grain <span class="badge"><IoIosArrowForward /></span></Link>
                        </li>
                        <li class="list-group-item p-0 border-left-0 border-right-0">
                            <Link to="/branches-details" className="color-primary py-2 d-flex justify-content-between align-items-center">Al Grain <span class="badge"><IoIosArrowForward /></span></Link>
                        </li>
                        <li class="list-group-item p-0 border-left-0 border-right-0">
                            <Link to="/branches-details" className="color-primary py-2 d-flex justify-content-between align-items-center">Al Grain <span class="badge"><IoIosArrowForward /></span></Link>
                        </li>
                        <li class="list-group-item p-0 border-left-0 border-right-0">
                            <Link to="/branches-details" className="color-primary py-2 d-flex justify-content-between align-items-center">Al Grain <span class="badge"><IoIosArrowForward /></span></Link>
                        </li>
                        <li class="list-group-item p-0 border-left-0 border-right-0">
                            <Link to="/branches-details" className="color-primary py-2 d-flex justify-content-between align-items-center">Al Grain <span class="badge"><IoIosArrowForward /></span></Link>
                        </li>
                    </ul> 
                </div>
            </section>
        </>
    )
}

export default Brachers