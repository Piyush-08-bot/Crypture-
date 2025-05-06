// Market.jsx

import React from "react";
import "./market.css"; // normal CSS
import LineChartCustomDots from "../chart1.jsx"


const Market = () => {
  return (
    <section className="market-section">
      <h2 className="section-title">Crypto Market Overview</h2>

      {/* Removed the chart component to show only Market section */}

      <LineChartCustomDots/>

      <div className="view-more-container">
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
};

export default Market;
