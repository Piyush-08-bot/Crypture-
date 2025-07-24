import React from 'react'
import Navbar from '@/components/Navbar/navbar';
import Hero from '@/components/HeroSection/Hero';
import Features from '@/components/FeaturesSection/Features';
import Market from '@/components/MarketSection/Market';
import Footer from '@/components/FooterSection/Footer';
import CryptoList from '@/components/Cryptolist/CryptoList';
function LandingPage() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <Market/>
    <section className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-12">Top Cryptos Today</h2>
      <div style={{ marginTop: '48px' }}>
        <CryptoList limit={4} />
      </div>
    </section>
    <Footer/>
  </div>
  )
}

export default LandingPage