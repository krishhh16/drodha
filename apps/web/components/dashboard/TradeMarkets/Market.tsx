// components/CryptoTable.js
import Image from 'next/image'

const CryptoTable = ({ cryptocurrencies }: any) => {
  return (
    <div className="bg-gray-900  text-white p-4">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400">
            <th className="text-left">Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Market Cap</th>
            <th className="text-right">24h Volume</th>
            <th className="text-right">24h Change</th>
            <th className="text-right">24h Price</th>
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto: any) => (
            <tr key={crypto.id} className="border-b border-gray-800">
              <td className="py-4 flex items-center">
                <img src={crypto.icon} className="w-8 h-8 object-contain mr-4"  alt={crypto.name} />
                <div>
                    <h1>{crypto.name}</h1>
                    <span className="text-gray-400">{crypto.symbol}</span>
                </div>
              </td>
              <td className="text-right">${crypto.price.toFixed(2)}</td>
              <td className="text-right">${crypto.marketCap}</td>
              <td className="text-right">${crypto.volume}</td>
              <td className={`text-right ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {crypto.change.toFixed(2)}%
              </td>
              <td className="text-right">
                {/* Replace with actual price chart component */}
                <div className={`h-6 w-20 inline-block ${crypto.change >= 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable