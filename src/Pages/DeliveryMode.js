import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiArrowLeft } from "react-icons/fi";

export default function DeliveryMode() {
    const [mode, setMode] = useState('delivery')

    const changeMode = (modeType) => { setMode(modeType) }

    return (
        <div className="delivery-mode">
            <div className="container delivery-header">
                <div className="row align-items-center">
                    <div className="col-3 go-back"><Link to="/"><FiArrowLeft /></Link></div>
                    <div className="col-6 col-md-4 page-title col-xl-3">Order Mode</div>
                </div>
            </div>
            <ul className="nav nav-pills">
                <li className="nav-item w-50 p-0 text-center">
                    <a className={ (mode === 'delivery') ? 'nav-link active' : 'nav-link' } onClick={ () => changeMode('delivery') }>Delivery</a>
                </li>
                <li className="nav-item w-50 p-0 text-center">
                    <a className={ (mode === 'pickup') ? 'nav-link active' : 'nav-link' } onClick={ () => changeMode('pickup') }>Pickup</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={ (mode === 'delivery') ? 'tab-pane container active' : 'tab-pane container fade' } id="delivery">
                    <div className="delivery-search">
                        <input type="text" placeholder="Search in cities" />
                    </div>
                    <ul>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                    </ul>
                </div>
                <div className={ (mode === 'pickup') ? 'tab-pane container active' : 'tab-pane container fade' } id="pickup">
                    <ul>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                        <li>Kuwait City</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
