import React from "react";
import './hero.css';
import { GridPatternDemo } from '../GridPatternDemo';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            {/* Grid Pattern Background */}
            <GridPatternDemo className="absolute-grid" />

            <div className="hero-content">
                <h1><span className="highlight"> Crypture  </span>  Your All-In-One Crypto Hub</h1>
                <p>Live price tracking, smart conversions, news, and portfolio management - all tailored for crypto enthusiasts.</p>
                <div className="hero-buttons">
                    <a href="#markets" className="hero-btn">Live Market</a>
                    <Link to="/signup" className="hero-btn outline">Create Account</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
