import React from 'react'
import { Link } from 'react-router-dom'

import Header from './../Includes/Header'
import PageCover from './../Includes/PageCover'

const Contact = () => {
    return (
        <>
            <Header />
            <PageCover />

            <section>
                <div className="login-page container mt-md-5">
                    <h2 className="text-uppercase title">Contact Us</h2>
                    <p className="sub">You Are Most Welcomed At title</p>

                    <div className="contact-info my-4">
                        <p><strong>We invite our valued Customers To visit us In:</strong></p>
                        <p>Salmiya - street khansa</p>
                        <p>Daily From : 10:00 AM - 10:00 OM</p>
                        <p>Hot Line : +965 000 000 00</p>
                    </div>

                    <h2 className="text-uppercase title">Keep In Touch</h2>
                    <p className="sub">You Are Most Welcomed At title</p>

                    <form>
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" name="" id="" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="">Mobile Number</label>
                            <div className="row">
                                <div className="col-3 pr-0"><input type="text" name="" id="" class="form-control text-center" placeholder="+965" /></div>
                                <div className="col-9"><input type="text" name="" id="" class="form-control" placeholder="" /></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="email" name="" id="" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="">Your message</label>
                            <textarea type="email" name="" class="form-control" rows="6"></textarea>
                        </div>
                        <div class="form-group mt-4"><button className="btn">Send</button></div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact 