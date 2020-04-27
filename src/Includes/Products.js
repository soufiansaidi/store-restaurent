import React from 'react'

import Product from './../Components/Product'

export default function Products() {
    return (
        <div className="list-products">
            <div className="row">
                <div className="col-sm-6 mb-4 col-md-4 col-xl-3"><Product /></div>
                <div className="col-sm-6 mb-4 col-md-4 col-xl-3"><Product /></div>
                <div className="col-sm-6 mb-4 col-md-4 col-xl-3"><Product /></div>
                <div className="col-sm-6 mb-4 col-md-4 col-xl-3"><Product /></div>
            </div>
        </div>
    )
}
