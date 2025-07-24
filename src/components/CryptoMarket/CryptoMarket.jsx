import React, { useEffect, useState } from "react";
import "./cryptomarket.css";

const CryptoMarket = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setCoins(data);
      } else {
        throw new Error("Unexpected API response format.");
      }

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p id="loading">Loading market data...</p>;
  if (error) return <p id="error">Error: {error}</p>;

  return (
    <div id="crypto-container">
      <h2 id="main-title">Crypture - Live Crypto Market</h2>

      {/* Top Coins */}
      <div id="top-coins">
        {coins.slice(0, 4).map((coin) => (
          <div key={coin.id} className="coin-card">
            <div className="coin-info">
              <img src={coin.image} alt={coin.name} className="coin-logo" />
              <h3 className="coin-name">
                {coin.name} ({coin.symbol.toUpperCase()})
              </h3>
            </div>
            <div className="coin-stats">
              <p className="coin-price">
                ${coin.current_price.toLocaleString()}
              </p>
              <p
                className={`coin-change ${
                  coin.price_change_percentage_24h >= 0
                    ? "up"
                    : "down"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}% (24h)
              </p>
            </div>
            {coin.sparkline_in_7d && (
              <img
                src={`https://quickchart.io/chart?c={type:'sparkline',data:{datasets:[{data:${JSON.stringify(
                  coin.sparkline_in_7d.price.slice(-30)
                )}}]}}`}
                alt="Sparkline"
                className="sparkline"
              />
            )}
          </div>
        ))}
      </div>

      {/* Market Table */}
      <div id="market-table-wrapper">
        <table id="market-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td className="coin-row">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="row-logo"
                  />
                  <span>{coin.name}</span>
                </td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? "up" : "down"}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p id="footer">Data updates every 60 seconds. Showing top 20 cryptocurrencies by market cap.</p>
    </div>
  );
};

export default CryptoMarket;
