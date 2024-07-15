'use client'
import { useRouter } from "next/navigation"
import { CryptoMarkets } from "./Markets";

const CryptoTable = ({ cryptocurrencies }: any) => {
  const router = useRouter();
  return (
    <div className="bg-[#15141B] rounded-xl text-white p-4">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 border-b h-[50px] border-gray-800">
            <th className="text-left">Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Market Cap</th>
            <th className="text-right">24h Volume</th>
            <th className="text-right">24h Change</th>
            <th className="text-right">24h Price</th>
          </tr>
        </thead>  
        <tbody>
          {cryptocurrencies?.map((crypto: any) => (
            <tr key={crypto.id}  onClick={() => router.push(`/trade/${crypto.sym}_USDC`)} className="border-b border-gray-800 cursor-pointer hover:bg-[#45454918] bg-[#15141B]">
              <td className="py-4 flex items-center">
                <img src={crypto.icon} className="w-8 h-8 object-contain mr-4"  alt={crypto.name} />
                <div>
                    <h1 className="text-sm">{crypto.name}</h1>
                    <span className="text-gray-400 text-xs">{crypto.symbol}</span>
                </div>
              </td>
              <td className="text-right">${crypto.price.toFixed(2)}</td>
              <td className="text-right">${crypto.mCap}</td>
              <td className="text-right">${crypto.vol}</td>
              <td className={`text-right ${crypto.change}`}>
                {crypto.change}%
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