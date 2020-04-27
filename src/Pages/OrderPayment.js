import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import Banner from './../Includes/Banner'

const OrderPayment = () => {
    return (
        <>
            <Header />

            <Banner logo="fdh" />

            <section>
                <div className="login-page container mb-4 pb-5">
                    <h2 className="text-uppercase title">Payment Method</h2>
                    <p className="sub">Choose your preferred payment method</p>

                    <div className="row mt-3 py-4 mb-5 border-top">
                        <div className="col-md-4 mb-2 select-payment">
                            <input type="radio" id="k-net" name="payment" />
                            <label for="k-net">
                                <span>K-net</span>
                                <img src="https://via.placeholder.com/30x30" alt="" />
                            </label>
                        </div>
                        <div className="col-md-4 mb-2 select-payment">
                            <input type="radio" id="card" name="payment" />
                            <label for="card">
                                <span for="">Credit Cards</span>
                                <img src="https://via.placeholder.com/30x30" alt="" />
                            </label>
                        </div>
                        <div className="col-md-4 mb-2 select-payment">
                            <input type="radio" id="paylee" name="payment" />
                            <label for="paylee">
                                <span for="">PayLee</span>
                                <img src="https://via.placeholder.com/30x30" alt="" />
                            </label>
                        </div>
                    </div>

                    <div className="start-ordering">
                        <Link to="/order/payment" className="btn">Place Order</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderPayment 