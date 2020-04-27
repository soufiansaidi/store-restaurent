import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ApplicationContext } from './../Context/ApplicationContext'
import Menu from './Menu'

import { MdShoppingCart, MdSentimentSatisfied, MdMenu } from "react-icons/md";

const Header = () => {
    const {menu, setMenu} = useContext(ApplicationContext)

    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3 d-md-none toggle-menu" onClick={ ()=> setMenu(!menu) }><MdMenu /></div>
                        <div className="col-6 col-md-4 col-xl-3 logo">
                            <Link to="/">
                                <h1 className="m-0">EasyBurger</h1>
                            </Link>
                        </div>
                        <div className="col-3 col-md-8 col-xl-9 header-right d-flex align-items-center justify-content-end">
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
            <Menu />
        </>
    )
}

export default Header