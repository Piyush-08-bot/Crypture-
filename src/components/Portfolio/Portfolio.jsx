import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Plus,
  Minus,
  Wallet,
  Eye,
  BarChart3,
} from 'lucide-react';
import './portfolio.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [cryptos, setCryptos] = useState([]);
  const [walletHoldings, setWalletHoldings] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true'
    )
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data);

        const demoHoldings = [
          { id: 'bitcoin', amount: 0.5432 },
          { id: 'ethereum', amount: 3.2145 },
          { id: 'solana', amount: 15.75 },
          { id: 'cardano', amount: 2500 },
        ];

        const mappedHoldings = demoHoldings.map((hold) => {
          const coin = data.find((c) => c.id === hold.id);
          return {
            id: coin?.id,
            name: coin?.name,
            symbol: coin?.symbol?.toUpperCase(),
            price: coin?.current_price, // USD only
            change24h: coin?.price_change_percentage_24h,
            amount: hold.amount,
            value: hold.amount * coin?.current_price, // USD only
          };
        });

        setWalletHoldings(mappedHoldings);
      });
  }, []);

  const totalPortfolioValue = walletHoldings.reduce((sum, h) => sum + h.value, 0);
  const totalChange24h = walletHoldings.reduce((sum, h) => sum + (h.value * h.change24h) / 100, 0);
  const totalChangePercent = (totalChange24h / totalPortfolioValue) * 100;

  const formatCurrency = (val) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(val);

  return (
    <div className="app">
      {/* Remove custom header and nav, use only global Navbar */}
      <main className="main">
        <div className="container">
          {activeTab === 'portfolio' && (
            <section className="portfolio-section">
              <div className="portfolio-header" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <h2 style={{ textAlign: 'left' }}>Portfolio Overview</h2>
                <div className="portfolio-stats">
                  <div className="stat-card">
                    <span className="stat-label">Total Balance: </span>
                    <span style={{color : '#2db4fd'}}>{formatCurrency(totalPortfolioValue)}</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">24h Change</span>
                    <span className={`stat-value ${totalChangePercent >= 0 ? 'positive' : 'negative'}`}>
                      {totalChangePercent >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {totalChangePercent.toFixed(2)}%
                    </span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Assets: </span>
                    <span className="stat-value">{walletHoldings.length}</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>Top Holdings</h3>
                <div className="crypto-list">
                  {walletHoldings.slice(0, 4).map((h) => (
                    <div key={h.id} className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon">{h.symbol[0]}</div>
                        <div>
                          <div className="crypto-name">{h.name}</div>
                          <div className="crypto-symbol">{h.symbol}</div>
                        </div>
                      </div>
                      <div className="crypto-details">
                        <div className="crypto-amount">
                          {h.amount.toFixed(4)} {h.symbol}
                        </div>
                        <div className="crypto-value">{formatCurrency(h.value)}</div>
                      </div>
                      <div className={`crypto-change ${h.change24h >= 0 ? 'positive' : 'negative'}`}>
                        {h.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {Math.abs(h.change24h).toFixed(2)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeTab === 'wallet' && (
            <section className="wallet-section">
              <div className="section-header">
                <h2>Wallet</h2>
              </div>

              <div className="wallet-overview">
                <div className="wallet-balance">
                  <span className="balance-label">Total Balance: </span>
                  <span style={{color : '#2db4fd'}}>{formatCurrency(totalPortfolioValue)}</span>
                  <span>(24h)</span>
                </div>
              </div>

              <div className="section">
                <h3>Holdings</h3>
                <div className="crypto-list">
                  {walletHoldings.map((h) => (
                    <div key={h.id} className="crypto-item wallet-item">
                      <div className="crypto-info">
                        <div className="crypto-icon">{h.symbol[0]}</div>
                        <div>
                          <div className="crypto-name">{h.name}</div>
                          <div className="crypto-symbol">{h.symbol}</div>
                        </div>
                      </div>
                      <div className="crypto-details">
                        <div className="crypto-amount">
                          {h.amount.toFixed(4)} {h.symbol}
                        </div>
                        <div className="crypto-value">{formatCurrency(h.value)}</div>
                      </div>
                      <div className={`crypto-change ${h.change24h >= 0 ? 'positive' : 'negative'}`}>
                        {h.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {Math.abs(h.change24h).toFixed(2)}%
                      </div>
                      <div className="wallet-actions">
                        <button className="action-button buy" disabled>
                          <Plus size={16} /> Buy
                        </button>
                        <button className="action-button sell" disabled>
                          <Minus size={16} /> Sell
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section">
                <h3>Recent Transactions</h3>
                <div className="transactions">
                  <div className="transaction-item">
                    <div className="transaction-icon buy">< Plus size={16} /> Buy </div>
                    <div className="transaction-info">
                      <div className="transaction-type">Buy BTC</div>
                      <div className="transaction-date">2 hours ago</div>
                    </div>
                    <div className="transaction-amount">
                      <div>+0.1234 BTC</div>
                      <div className="transaction-value">{
                        (() => {
                          const btc = cryptos.find(c => c.id === 'bitcoin');
                          if (!btc) return '...';
                          const usdValue = 0.1234 * btc.current_price;
                          return (
                            <div style={{color:'#2db4fd', fontWeight:'bold'}}>${usdValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
                          );
                        })()
                      }</div>
                    </div>
                  </div>
                  <div className="transaction-item">
                    <div className="transaction-icon sell"><Minus size={16} /> Sell </div>
                    <div className="transaction-info">
                      <div className="transaction-type">Sell ETH</div>
                      <div className="transaction-date">1 day ago</div>
                    </div>
                    <div className="transaction-amount">
                      <div>-2.5 ETH</div>
                      <div className="transaction-value">{
                        (() => {
                          const eth = cryptos.find(c => c.id === 'ethereum');
                          if (!eth) return '...';
                          const usdValue = 2.5 * eth.current_price;
                          return (
                            <div style={{color:'#2db4fd', fontWeight:'bold'}}>${usdValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
                          );
                        })()
                      }</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
