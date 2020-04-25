import React from 'react'
import { Link } from 'react-router-dom'

import Banner from './../Includes/Banner'

import { FiArrowLeft } from "react-icons/fi";

const Login = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3 go-back"><Link to="/"><FiArrowLeft /></Link></div>
                        <div className="col-6 col-md-4 col-xl-3 logo">
                            <Link to="/">
                                <h1 className="m-0">EasyBurger</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <Banner logo="aa" />

            <section>
                <div className="login-page container mt-md-5">
                    <h2 className="text-uppercase title">My Account</h2>
                    <p className="sub">Please login to your account</p>
                    <form>
                        <div class="form-group">
                            <label for="">Email or Mobile</label>
                            <input type="text" name="" id="" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" name="" id="" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group mt-5">
                            <button className="btn">Login</button>
                        </div>
                        <div class="go-forgot-password mt-4">
                            <Link to="/forgot-password">Forgot my password?</Link>
                        </div>
                        <div class="go-signup my-4">
                            <Link className="btn" to="/sign-up">Signup</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login 