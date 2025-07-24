// components/CryptoList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

const API_KEY = "CG-Ypj4DZWPJc9sXAgZNd4DMGJz";

const CryptoList = ({ limit = 5 }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${limit}&page=1&x_cg_demo_api_key=${API_KEY}`;
      try {
        const res = await axios.get(url);
        setCoins(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchCoins();
  }, [limit]);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {coins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CryptoList;
