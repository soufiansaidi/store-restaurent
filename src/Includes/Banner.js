import React from 'react'

const Banner = () => {
    return (
        <div className="home-banner" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560611588-163f295eb145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)' }}>
            <div className="container text-center">
                <img src="https://via.placeholder.com/300x300" alt="logo" />
                <h2>EasyBurger</h2>
                <p>Lunch & Dinner Menu</p>
            </div>
        </div>
    )
}

export default Banner