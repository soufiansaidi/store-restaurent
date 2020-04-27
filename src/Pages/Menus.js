import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import Menu from './../Includes/Menu'
import PageCover from './../Includes/PageCover'

import Collapse from './../Includes/Collapse'
import Products from './../Includes/Products'

const Menus = () => {
    return (
        <>
            <Header />
            
            <PageCover />

            <section>
                <div className="container pb-5 mb-4">
                    <div className="text-center">
                        <h4 className="m-0 color-primary"><small className="font-weight-bold">EasyBurger</small></h4>
                        <p className="m-0 color-primary">Descibstructing the perfect Burger</p>
                        <p className="m-0 color-primary">Min. Order; JOD 0.00</p>
                    </div>
                    <Collapse>
                        <Products />
                    </Collapse>
                    <Collapse>
                        <Products />
                    </Collapse>
                    <Collapse>
                        <Products />
                    </Collapse>
                    <Collapse>
                        <Products />
                    </Collapse>
                    <Collapse>
                        <Products />
                    </Collapse>
                </div>
                <div className="start-ordering">
                    <Link to="/login">Start ordering</Link>
                </div>
            </section>
        </>
    )
}

export default Menus