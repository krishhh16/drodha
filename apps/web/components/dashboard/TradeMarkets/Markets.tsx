'use client'
import { useEffect, useState } from "react"
import CryptoTable from "./Market"
import axios from "axios"

export  interface CryptoMarkets {
  id: number,
  name: string,
  price: number,
  mcap: string,
  vol: string,
  change: string,
  icon: string,
  sym: string
}
const Home = () => {
  
  const [cryptocurrencies, setCrypto] = useState<CryptoMarkets[]>()
  useEffect(() => {
    (async () => {
      try{
      const response = await axios.get('http://localhost:3000/api/getAllMarkets')
      setCrypto(response.data.markets)
 } catch(err: any) {
  alert(err.message)
 }
    })()
  }, [])
  return (
    <div className="max-w-[75%] mx-auto bg-gray-900 rounded-xl">
      <CryptoTable cryptocurrencies={cryptocurrencies} />
    </div>
  )
}

export default Home 