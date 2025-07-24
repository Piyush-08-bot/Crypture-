import React from "react"
import Navbar from "@/components/Navbar/navbar"
import CryptoConverter from "@/components/Converter/CryptoConverter"

function ConverterPage(){
    return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <CryptoConverter/>
        </div>
    </div>
    );
}

export default ConverterPage;