// App.jsx
import React, { useState, useEffect } from 'react';
import './converter.css';


function App() {
  const [cryptos, setCryptos] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('bitcoin');
  const [toCurrency, setToCurrency] = useState('usd');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState('0');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fiatCurrencies = [
    { id: 'usd', name: 'US Dollar', symbol: '$', current_price: 1 },
    { id: 'eur', name: 'Euro', symbol: '€', current_price: 0.85 }
  ];

  const allCurrencies = [...cryptos, ...fiatCurrencies];

  const fetchCryptoData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      );
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setCryptos(data);
    } catch (err) {
      setError('Failed to fetch cryptocurrency data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const calculateConversion = () => {
    const from = allCurrencies.find(c => c.id === fromCurrency);
    const to = allCurrencies.find(c => c.id === toCurrency);
    if (from && to && amount) {
      const converted = (parseFloat(amount) * from.current_price) / to.current_price;
      setResult(converted.toFixed(8));
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  useEffect(() => {
    calculateConversion();
  }, [amount, fromCurrency, toCurrency, cryptos]);

  const getCurrencySymbol = (currencyId) => {
    const currency = allCurrencies.find(c => c.id === currencyId);
    return currency ? (currency.symbol || '$') : '$';
  };

  return (
    <div className="app">
      <h1 className="title">Cyrpture</h1>
      <p className="subtitle">Real-Time Cryptocurrency Converter</p>

      {error && <div className="error">{error}</div>}

      <div className="converter">
        <div className="field">
          <label>From</label>
          <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
            {allCurrencies.map(c => (
              <option key={c.id} value={c.id}>{c.symbol?.toUpperCase() || c.id.toUpperCase()} - {c.name}</option>
            ))}
          </select>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>

        <div className="field">
          <label>To</label>
          <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
            {allCurrencies.map(c => (
              <option key={c.id} value={c.id}>{c.symbol?.toUpperCase() || c.id.toUpperCase()} - {c.name}</option>
            ))}
          </select>
          <div className="result">{result} {getCurrencySymbol(toCurrency)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;