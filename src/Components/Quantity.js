import React, { useState } from 'react'

export default function Quantity() {
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
        <div class="qty-wrap d-flex align-items-center justify-content-between">
            <div className="increment" onClick={ () => Decrease() }>-</div>
            <div className="total-qty">{ Qty }</div>
            <div className="increment" onClick={ () => Increase() }>+</div>
        </div>
    )
}
