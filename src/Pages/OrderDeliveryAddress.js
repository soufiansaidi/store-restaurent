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

                    <div class="form-group">
                        <label for="">Area</label>
                        <select class="form-control">
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                            <option>Al Sabahiya</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Choose Unit Type</label>
                        <select class="form-control">
                            <option>Home</option>
                            <option>Home</option>
                            <option>Home</option>
                            <option>Home</option>
                            <option>Home</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Mobile Number *</label>
                        <div className="row">
                            <div className="col-3 pr-0"><input type="text" name="" id="" class="form-control text-center" placeholder="+965" /></div>
                            <div className="col-9"><input type="text" name="" id="" class="form-control" placeholder="" /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 form-group">
                            <label for="">Block *</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="col-6 form-group">
                            <label for="">Street *</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 form-group">
                            <label for="">Building/House No *</label>
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                        <div class="col-6 form-group">
                            <label for="">Appartement/Office</label>
                            <input type="text" class="form-control" placeholder="" />
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