import React from "react";
import "./market.css"; 
import LineChartCustomDots from "../chart1.jsx"
import { Link } from "react-router";

const Market = () => {
  return (
    <section className="market-section">
      <h2 className="section-title">Crypto Market Overview</h2>
      <div className="view-more-container">
      <LineChartCustomDots/>
      <Link to='/market'>
        <button className="view-more-btn" >View More</button></Link>
      </div>
    </section>
  );
};

export default Market;
