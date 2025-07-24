// components/CryptoCard.jsx
import React from "react";

const CryptoCard = ({ coin }) => {
  return (
    <div className="bg-[#121212] border border-[#2db4fc] rounded-2xl p-6 shadow-lg w-72 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img src={coin.image} alt={coin.name} className="w-7 h-7 mb-2" />
      <h3 className="text-lg font-bold mb-1 text-center text-[#2db4fd]">{coin.name} ({coin.symbol.toUpperCase()})</h3>
      <p className="text-white text-md mb-1">₹{coin.current_price}</p>
      <p className={coin.price_change_percentage_24h >= 0 ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;
