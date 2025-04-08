import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CriptoList() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {

        const fetchCoins = async () => {
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
                );
                setCoins(response.data)
                setLoading(false)
            } catch (error) {
                console.error("error fetching crypto data ", error)
                setLoading(false)
            }
        };
        fetchCoins();


    }, []);
    if (loading) {
        return <p className="text-center text-lg">Loading data...</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coins.map((coin) => (
                <div key={coin.id}
                    className="bg-gray-800 p-4 rounded-xl shadow hover:bg-gray-700 transition"
                >
                    <div className="flex  justify-center items-center gap-4">
                        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                        <div>
                            <h2 className="text-xl font-bold">{coin.name}</h2>
                            <p className="text-sm text-gray-400">{coin.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center items-center gap-20">
                        <p className="text-lg font-semibold">💵 ${coin.current_price.toLocaleString()}</p>
                        <p className={coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"}>
                            {coin.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default CriptoList
