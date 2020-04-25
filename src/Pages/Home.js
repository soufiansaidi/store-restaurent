import React from 'react'
import { Link } from 'react-router-dom'

import Banner from './../Includes/Banner'
import Header from './../Includes/Header'
import Footer from './../Includes/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <section>
                <Banner title="Easy Burger" text="Deconsyriting the Perfect Burger" logo="aa" bg="https://images.unsplash.com/photo-1560611588-163f295eb145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
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

                    <div className="home-categories pb-5 mb-3">
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
                
                    <div className="start-ordering">
                        <Link to="/login">Start ordering</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home