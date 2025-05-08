import React from 'react';
import './features.css';
import { Activity } from 'lucide-react';
import { Calculator } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';

const Features = () => {
  return (
    <section className="features-section">
        <div className="button-container">
            <button className="explore-btn">Explore Features</button>
        </div>
      <h2 className="section-title">Features Built for Crypto Enthusiasts</h2>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
          <Activity className='custom-icon' color='#2db4fd'/>
          </div>
          <div className="feature-text">
            <h3>Live Price Updates</h3>
            <p>Get real-time prices of all major cryptocurrencies.</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Calculator className='custom-icon' color='#2db4fd'/>
          </div>
          <div className="feature-text">
            <h3>Crypto Converter</h3>
            <p>Convert between crypto and fiat currencies instantly.</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <BriefcaseBusiness className='custom-icon' color='#2db4fd'/>
          </div>
          <div className="feature-text">
            <h3>Smart Portfolio</h3>
            <p>Track your crypto investments and performance easily.</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Newspaper  color='#2db4fd'/>
          </div>
          <div className="feature-text">
            <h3>Latest News</h3>
            <p>Stay informed with the latest crypto market updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

