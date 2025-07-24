import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import LandingPage from './Pages/LandingPage';
import MarketPage from './Pages/MarketPage';
import ConverterPage from './Pages/ConverterPage';
import PortfolioPage from './Pages/PortfolioPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import NewsPage from './Pages/NewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;