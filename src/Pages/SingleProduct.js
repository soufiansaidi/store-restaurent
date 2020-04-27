import React, { useState } from 'react'

import Header from './../Includes/Header'
import { MdFormatIndentDecrease } from 'react-icons/md'

export default function SingleProduct() {
    const [Qty, setQty] = useState(1)

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

                    <form className="col-12 col-md-6 offset-md-3 mb-5">
                        <div class="form-group">
                            <label for="">Add Special Instructions</label>
                            <textarea rows="5" name="Special_instructions" id="" class="form-control"></textarea>
                        </div>
                        <div class="row mt-4 align-items-center justify-content-between">
                            <div class="col-6">
                                <div class="qty-wrap d-flex align-items-center justify-content-between">
                                    <div className="increment" onClick={ () => Decrease() }>-</div>
                                    <div className="total-qty">{ Qty }</div>
                                    <div className="increment" onClick={ () => Increase() }>+</div>
                                </div>
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <button type="submit">Add to Order</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}
