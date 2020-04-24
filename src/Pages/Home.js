import React from 'react'
import { Link } from 'react-router-dom'

import Banner from './../Includes/Banner'

const Home = () => {
    return (
        <>
            <Banner />

            <div className="container mt-4">
                <div className="delivery-pickup mb-3">
                    <div className="row">
                        <div className="col-6 text-center border-right">
                            <Link to="/">Delivery</Link>
                        </div>
                        <div className="col-6 text-center">
                            <Link to="/">Pick Up</Link>
                        </div>
                    </div>
                </div>

                {/* <form className="mt-4">
                    <div class="row">
                        <div class="col-6 pr-2 mb-md-4 form-group">
                            <select name="delivery" id="delivery" class="form-control">
                                <option>Delivery</option>
                                <option>Delivery</option>
                                <option>Delivery</option>
                                <option>Delivery</option>
                                <option>Delivery</option>
                                <option>Delivery</option>
                            </select>
                        </div>
                        <div class="col-6 pl-2 mb-md-4 form-group">
                            <select name="area" id="area" class="form-control">
                                <option>Salmiya</option>
                                <option>Salmiya</option>
                                <option>Salmiya</option>
                                <option>Salmiya</option>
                                <option>Salmiya</option>
                                <option>Salmiya</option>
                            </select>
                        </div>
                        <div class="col-6 pr-2 mb-md-4 form-group">
                            <select name="estimated_time" id="estimated_time" class="form-control">
                                <option>Estimated Time 1:30 min</option>
                                <option>Estimated Time 1:30 min</option>
                                <option>Estimated Time 1:30 min</option>
                                <option>Estimated Time 1:30 min</option>
                                <option>Estimated Time 1:30 min</option>
                                <option>Estimated Time 1:30 min</option>
                                <option>Estimated Time 1:30 min</option>
                            </select>
                        </div>
                        <div class="col-6 pl-2 mb-md-4 form-group">
                            <select name="scheduled_time" id="scheduled_time" class="form-control">
                                <option>Scheduled Time</option>
                                <option>Scheduled Time</option>
                                <option>Scheduled Time</option>
                                <option>Scheduled Time</option>
                                <option>Scheduled Time</option>
                                <option>Scheduled Time</option>
                                <option>Scheduled Time</option>
                            </select>
                        </div>
                    </div>
                </form> */}

                <div className="home-categories pb-5">
                    <h3>Categories</h3>
                    <div className="grid-3">
                        <div className="single-category">
                            <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="logo" />
                            <div className="cat-infos">
                                <h4>Salads</h4>
                                <div className="product-counter">4 Products</div>
                            </div>
                        </div>
                        <div className="single-category">
                            <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="logo" />
                            <div className="cat-infos">
                                <h4>Salads</h4>
                                <div className="product-counter">4 Products</div>
                            </div>
                        </div>
                        <div className="single-category">
                            <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="logo" />
                            <div className="cat-infos">
                                <h4>Salads</h4>
                                <div className="product-counter">4 Products</div>
                            </div>
                        </div>
                        <div className="single-category">
                            <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="logo" />
                            <div className="cat-infos">
                                <h4>Salads</h4>
                                <div className="product-counter">4 Products</div>
                            </div>
                        </div>
                        <div className="single-category">
                            <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="logo" />
                            <div className="cat-infos">
                                <h4>Salads</h4>
                                <div className="product-counter">4 Products</div>
                            </div>
                        </div>
                        <div className="single-category">
                            <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="logo" />
                            <div className="cat-infos">
                                <h4>Salads</h4>
                                <div className="product-counter">4 Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home