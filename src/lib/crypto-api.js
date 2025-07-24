export async function getCryptoData() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true",
        { next: { revalidate: 60 } }, // Cache for 1 minute
      )
  
      if (!response.ok) {
        throw new Error("Failed to fetch crypto data")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching crypto data:", error)
      // Return fallback data
      return [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          current_price: 42123.369,
          price_change_percentage_24h: 1.7,
          sparkline_in_7d: {
            price: [41800, 41950, 41700, 42100, 42300, 42000, 42400, 42123],
          },
        },
      ]
    }
  }