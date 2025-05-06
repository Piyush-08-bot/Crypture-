import React from 'react'
import Navbar from './components/Navbar/navbar';
import Hero from './components/HeroSection/Hero';
import Features from './components/FeaturesSection/Features';
import Market from './components/MarketSection/Market';
import Footer from './components/FooterSection/Footer';

function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <Market />
    <Footer/>
  </div>
  )
}

export default App
