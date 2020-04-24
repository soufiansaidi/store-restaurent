import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="d-flex flex-column justify-content-center">
                    <img src="https://via.placeholder.com/300x300" alt="logo" />
                    <ul className="menu mb-3">
                        <li><Link to="/branches">Branches</Link></li>
                        <li><Link to="/order-status">Order status</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                    </ul>
                    <ul className="social-media">
                        <li><Link to="#"><FaFacebookF /></Link></li>
                        <li><Link to="#"><FaTwitter /></Link></li>
                        <li><Link to="#"><FaInstagram /></Link></li>
                        <li><Link to="#"><FaYoutube /></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer