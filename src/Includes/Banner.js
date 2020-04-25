import React from 'react'

const Banner = ({ logo, title, text, bg = null }) => {
    return (
        <div 
            className="home-banner" 
            style={{ backgroundImage: 'url('+bg+')' }}
            >
            { (logo) && <img src="https://via.placeholder.com/300x300" alt="logo" /> }
            <div className="container text-center">
                { (title) && <h2>{ title }</h2> }
                { (text) && <p>{ text }</p> }
            </div>
        </div>
    )
}

export default Banner