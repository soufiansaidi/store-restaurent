import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'

export default function SingleProduct() {
    const [Qty, setQty] = useState(1)
    const [instructions, setInstructions] = useState(1)

    const Increase = () => {
        let quantity = Qty + 1
        setQty(quantity)
    }
    
    const Decrease = () => {
        let quantity = Qty - 1
        if(quantity > 0) setQty(quantity)
    }

    return (
        <>

            <Header />

            <div className="container product-details">
                <div className="row">

                    <div className="p-0 px-md-3 single-product">
                        <div className="single-product-img"><img src="https://via.placeholder.com/600x450" alt="" /></div>
                        <div className="p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3>Tsunami</h3>
                                <span className="badge">KD 3.000</span>
                            </div>
                            <p >Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos..</p>
                        </div>
                    </div>

                    <div className="form-group col-12">
                        <label for="">Add Special Instructions</label>
                        <textarea rows="5" onChange={ (e) => setInstructions(e.val) } value={ setInstructions } className="form-control"></textarea>
                    </div>

                    <div className="sticky-bar col-12 col-md-6 offset-md-3">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-6">
                                <div className="qty-wrap d-flex align-items-center justify-content-between">
                                    <div className="increment" onClick={ () => Decrease() }>-</div>
                                    <div className="total-qty">{ Qty }</div>
                                    <div className="increment" onClick={ () => Increase() }>+</div>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <Link to="/order/contact-infos">Add to Order</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
