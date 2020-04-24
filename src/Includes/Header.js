import React from 'react'
import { Link } from 'react-router-dom'

import { MdShoppingCart, MdSentimentSatisfied } from "react-icons/md";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-3 logo">
                        <Link to="/">
                            <h1 className="m-0">EasyBurger</h1>
                        </Link>
                    </div>
                    <div className="col-md-8 col-xl-9 header-right d-flex align-items-center justify-content-end">
                        <ul>
                            <li><Link to="/branches">Branches</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="/contact-us">Contact us</Link></li>
                        </ul>
                        <div className="language">
                            <Link to="/contact-us">عربي</Link>
                        </div>
                        <div className="cart">
                            <Link to="/cart">
                                <MdShoppingCart />
                                <span>3</span>
                            </Link>
                        </div>
                        <div className="profile">
                            <Link to="/profile"><MdSentimentSatisfied /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header