import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import Banner from './../Includes/Banner'

const OrderContact = () => {
    return (
        <>
            <Header />

            <Banner logo="fdh" />

            <section>
                <div className="login-page container mb-4 pb-5">
                    <h2 className="text-uppercase title">Delivery Address</h2>
                    <p className="sub">Precise location wile help reach you faster</p>

                    <div className="form-group">
                        <label for="">Area</label>
                        <select className="form-control">
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="">Choose Unit Type</label>
                        <select className="form-control">
                            <option>Home</option>
                            <option>Home</option>
                            <option>Home</option>
                            <option>Home</option>
                            <option>Home</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="">Mobile Number *</label>
                        <div className="row">
                            <div className="col-3 pr-0"><input type="text" name="" id="" className="form-control text-center" placeholder="+965" /></div>
                            <div className="col-9"><input type="text" name="" id="" className="form-control" placeholder="" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label for="">Block *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-6 form-group">
                            <label for="">Street *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label for="">Building/House No *</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                        <div className="col-6 form-group">
                            <label for="">Appartement/Office</label>
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="start-ordering">
                        <Link to="/order/payment" className="btn">Next</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderContact 