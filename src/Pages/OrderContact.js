import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import Banner from './../Includes/Banner'

const OrderDeliveryAddress = () => {
    return (
        <>
            <Header />

            <Banner logo="fdh" />

            <section>
                <div className="login-page container mb-4 pb-5">
                    <h2 className="text-uppercase title">Contact Info</h2>
                    <p className="sub">We'll use it to get back to you for order updates</p>

                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="">Mobile Number</label>
                        <div className="row">
                            <div className="col-3 pr-0"><input type="text" name="" id="" class="form-control text-center" placeholder="+965" /></div>
                            <div className="col-9"><input type="text" name="" id="" class="form-control" placeholder="" /></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" name="" id="" class="form-control" placeholder="" />
                    </div>
                    <div className="start-ordering">
                        <Link to="/order/delivery-address" className="btn">Next</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderDeliveryAddress 