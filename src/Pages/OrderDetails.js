import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import Banner from './../Includes/Banner'
import Quantity from './../Components/Quantity'

const OrderDetails = () => {
    return (
        <>
            <Header />

            <Banner logo="fdh" />

            <section>
                <div className="order-details container mb-4 pb-5">
                    <h2 className="text-uppercase title">Order details</h2>

                    <div className="single-row-order">
                        <div className="d-flex wrap">
                            <div className="order-image"><img src="https://via.placeholder.com/300x300" alt="" /></div>
                            <div className="order-infos">
                                <h4>Juicy Lucy</h4>
                                <p>Extra cheese</p>
                                <p>No tomatoes</p>
                                <div className="text-right price">KD 3.000</div>
                            </div>
                        </div>
                        <div className="d-flex wrap align-items-end mt-2">
                            <Quantity />
                            <Link className="remove-order" to="">Remove Items</Link>
                        </div>
                    </div>
                    <div className="single-row-order">
                        <div className="d-flex wrap">
                            <div className="order-image"><img src="https://via.placeholder.com/300x300" alt="" /></div>
                            <div className="order-infos">
                                <h4>Juicy Lucy</h4>
                                <p>Extra cheese</p>
                                <p>No tomatoes</p>
                                <div className="text-right price">KD 3.000</div>
                            </div>
                        </div>
                        <div className="d-flex wrap align-items-end mt-2">
                            <Quantity />
                            <Link className="remove-order" to="">Remove Items</Link>
                        </div>
                    </div>
                    <div className="single-row-order">
                        <div className="d-flex wrap">
                            <div className="order-image"><img src="https://via.placeholder.com/300x300" alt="" /></div>
                            <div className="order-infos">
                                <h4>Juicy Lucy</h4>
                                <p>Extra cheese</p>
                                <p>No tomatoes</p>
                                <div className="text-right price">KD 3.000</div>
                            </div>
                        </div>
                        <div className="d-flex wrap align-items-end mt-2">
                            <Quantity />
                            <Link className="remove-order" to="">Remove Items</Link>
                        </div>
                    </div>

                    <div className="order-calculations">
                        <div className="d-flex mb-2 align-items-center justify-content-between">
                            <div>Subtotal</div>
                            KD3.000
                        </div>
                        <div className="d-flex mb-2 align-items-center justify-content-between">
                            <div>Delivery fee</div>
                            KD1.000
                        </div>
                        <div className="d-flex align-items-center justify-content-between font-weight-bold">
                            <div>Total</div>
                            KD12.000
                        </div>
                    </div>

                    <div className="start-ordering">
                        <Link to="/order/contact-infos" className="rounded text-uppercase">Chechout</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderDetails 