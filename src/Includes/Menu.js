import React, { useContext } from 'react'
import { ApplicationContext } from './../Context/ApplicationContext'
import Banner from './Banner'
import { Link } from 'react-router-dom'

import { IoIosStarOutline, IoIosRefresh, IoIosPaper, IoIosArrowForward } from "react-icons/io";

const Menu = ({ logo, title, text, bg = null }) => {
    const {menu, setMenu} = useContext(ApplicationContext)

    return (
        <div className={ (menu) ? 'active menu-mobile' : 'menu-mobile' }>
            <div className="menu-close" onClick={ ()=> setMenu(!menu) }></div>
            <div className="wrap">
                <Banner logo="gj" />
                <div className="menu-top">
                    <Link to="">
                        <IoIosStarOutline />
                        Favorites
                    </Link>
                    <Link to="">
                        <IoIosPaper />
                        orders
                    </Link>
                    <Link to="">
                        <IoIosRefresh />
                        Re-order
                    </Link>
                </div>
                <ul>
                    <li><Link to="/">Menu <IoIosArrowForward /></Link></li>
                    <li><Link to="/">Branches <IoIosArrowForward /></Link></li>
                    <li><Link to="/">About us <IoIosArrowForward /></Link></li>
                    <li><Link to="/">Contact us <IoIosArrowForward /></Link></li>
                    <li><Link to="/">عربي <IoIosArrowForward /></Link></li>
                </ul>
                <div className="my-account"><Link to="">My Account <IoIosArrowForward /></Link></div>
            </div>
        </div>
    )
}

export default Menu