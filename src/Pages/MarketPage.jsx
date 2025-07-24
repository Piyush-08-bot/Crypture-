import React from "react"
import TradingViewWidget from "@/components/TradingViewWidget"
import Navbar from "@/components/Navbar/navbar"
import CryptoMarket from "@/components/CryptoMarket/CryptoMarket"
function MarketPage(){
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <CryptoMarket/>
            </div>
            <div className="flex justify-center my-8">
                <h2 className="text-2xl font-bold">Explore Market</h2>
            </div>
        
        <div className="flex justify-center">
            <TradingViewWidget/>
        </div>
        </div>
    )
}

export default MarketPage