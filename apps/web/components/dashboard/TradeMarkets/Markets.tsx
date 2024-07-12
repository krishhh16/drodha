// pages/index.js
import CryptoTable from "./Market"

const Home = () => {
  const cryptocurrencies = [
    // Add your cryptocurrency data here
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: 'https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95',
      price: 57151.90,
      marketCap: '1.1T',
      volume: '1.6M',
      change: -1.73,
    },
    {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        icon: 'https://backpack.exchange/_next/image?url=%2Fcoins%2Feth.png&w=48&q=95',
        price: 3075.00,
        marketCap: '370.6B',
        volume: '$264.3k',
        change: -1.73,
      },
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95',
        price: 57151.90,
        marketCap: '1.1T',
        volume: '1.6M',
        change: -1.73,
      },
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95',
        price: 57151.90,
        marketCap: '1.1T',
        volume: '1.6M',
        change: -1.73,
      },
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95',
        price: 57151.90,
        marketCap: '1.1T',
        volume: '1.6M',
        change: -1.73,
      },
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95',
        price: 57151.90,
        marketCap: '1.1T',
        volume: '1.6M',
        change: -1.73,
      },
          
  ]

  return (
    <div className="max-w-[75%] mx-auto bg-gray-900 rounded-xl">
      <CryptoTable cryptocurrencies={cryptocurrencies} />
    </div>
  )
}

export default Home 