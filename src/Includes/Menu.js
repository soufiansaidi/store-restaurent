import React, { useContext } from 'react'
import { ApplicationContext } from './../Context/ApplicationContext'
import Banner from './Banner'
import { Link } from 'react-router-dom'

import { IoIosStarOutline, IoIosRefresh, IoIosPaper, IoIosArrowForward } from "react-icons/io";

const Menu = ({ logo, title, text, bg = null }) => {
    const {menu, setMenu} = useContext(ApplicationContext)

    const closeMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className={ (menu) ? 'active menu-mobile' : 'menu-mobile' }>
            <div className="menu-close" onClick={ ()=> setMenu(!menu) }></div>
            <div className="wrap">
                <Banner logo="gj" />
                <div className="menu-top">
                    <Link onClick={() => closeMenu()} to="">
                        <IoIosStarOutline />
                        Favorites
                    </Link>
                    <Link onClick={() => closeMenu()} to="/order/details">
                        <IoIosPaper />
                        orders
                    </Link>
                    <Link onClick={() => closeMenu()} to="">
                        <IoIosRefresh />
                        Re-order
                    </Link>
                </div>
                <ul>
                    <li><Link onClick={() => closeMenu()} to="/menus">Menu <IoIosArrowForward /></Link></li>
                    <li><Link onClick={() => closeMenu()} to="/branches">Branches <IoIosArrowForward /></Link></li>
                    <li><Link onClick={() => closeMenu()} to="/about">About us <IoIosArrowForward /></Link></li>
                    <li><Link onClick={() => closeMenu()} to="/Contact">Contact us <IoIosArrowForward /></Link></li>
                    <li><Link onClick={() => closeMenu()} to="/">عربي <IoIosArrowForward /></Link></li>
                </ul>
                <div className="my-account"><Link onClick={() => closeMenu()} to="">My Account <IoIosArrowForward /></Link></div>
            </div>
        </div>
    )
}

export default Menu