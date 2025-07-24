import React from "react"
import Navbar from "@/components/Navbar/navbar"
import Portfolio from "@/components/Portfolio/Portfolio"

function PortfolioPage (){
    return(
        <div className="app">
            <Navbar/>
            <Portfolio/>
        </div>
    )
}

export default PortfolioPage;