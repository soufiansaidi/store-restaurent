import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div className="list-products">
            <div className="row">
                <div className="col-sm-6 mb-4 col-md-4 col-xl-3 single-product">
                    <div className="wrap">
                        <div className="single-product-img">
                            <Link to=""><img src="https://via.placeholder.com/600x450" alt="" /></Link>
                        </div>
                        <div className="p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3><Link to="">Tsunami</Link></h3>
                                <span className="badge">KD 3.000</span>
                            </div>
                            <p >Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos..</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-43col-md-4 col-xl-3 single-product">
                    <div className="wrap">
                        <div className="single-product-img">
                            <Link to=""><img src="https://via.placeholder.com/600x450" alt="" /></Link>
                        </div>
                        <div className="p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3><Link to="">Tsunami</Link></h3>
                                <span className="badge">KD 3.000</span>
                            </div>
                            <p >Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
