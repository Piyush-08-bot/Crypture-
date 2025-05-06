import React from "react";

import './hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1><span className="highlight"> Crypture  </span>  Your All-In-One Crypto Hub</h1>
                <p>Live price tracking, smart conversions, news, and portfolio management - all tailored for crypto eenthusiasts.</p>
                <div className="hero-buttons">
                    <a href="#markets" className="hero-btn">Live Market</a>
                    <a href="#signup" className="hero-btn outline">Create Portfolio</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;