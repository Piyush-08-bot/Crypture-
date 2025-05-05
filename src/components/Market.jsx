// Market.jsx

import React from "react";
import "./market.css"; // normal CSS

const Market = () => {
  return (
    <section className="market-section">
      <h2 className="section-title">Crypto Market Overview</h2>

      {/* Removed the chart component to show only Market section */}

      <div className="view-more-container">
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
};

export default Market;
