import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Orderbook from './orderbook'
import axios from 'axios'

function TradeInfo() {
    //@ts-ignore
    const [base, quote]= useParams().market.split("_")
    const [baseQuoteVal, setBaseQuote] = useState({
      base: 0,
      quote: 0
    })
    const [info, setInfo] = useState()
    const [bookTrade, setBookTrade] = useState<"Book" | "Trade">("Book")

    useEffect(() => {
      (async () => {
        const response = await axios.post('http://localhost:3000/api/getAllMarkets', {
          crypto: base
        })

        setInfo(response.data.cryptoDetails)

      })()
    }, [])

  return (
    <div onClick={() => console.log(base, quote)} className="w-[80vw] h-full">
      <div className="h-[10vh] px-6 gap-10 flex items-center justify-left w-full border-y border-slate-400/30">\
            <div className="relative mr-[-30px]">
              <img src={info?.icon} className="w-6 top-0 right-4 absolute h-6 object-cover" alt="" />
              <img className="top-0 w-6 h-6"  src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fusdc.png&w=32&q=75" alt="" />
            </div>
            <h1 className='text-white'>
              {base + "/" + quote}
            </h1>
            <div>
              <h1 className='text-white'>
                {info?.price}
              </h1>
              <h1 className='text-white text-xs'>
                ${info?.price}
              </h1>
            </div>
            <div>
              <h1 className="text-[0.7vw] text-slate-500">24H Change</h1>
              <h1 className={`${info?.change.includes("-") ? "text-red-500": "text-green-500"} text-xs`}>{info?.change}</h1>
            </div>
            <div>
              <h1 className="text-[0.7vw] text-slate-500">24H Volume(USDC)</h1>
              <h1 className={`text-white text-xs`}>{info?.vol}</h1>
            </div>
      </div>
      <div className="flex w-full h-[80vh]">
        <div className="w-[80%] h-full">
          <img className="w-full object-contain" src="https://img.freepik.com/premium-photo/graph-with-word-graph-showing-word-graph_406811-36121.jpg?w=1380" alt="" />
        </div>
        <div className="w-[20%]">
          <div className="flex gap-4">
            <h1 onClick={() => setBookTrade("Book")} className={`font-semibold hover:cursor-pointer transition-all ease-linear duration-75   text-white text-xs ${bookTrade == "Book" && "border-b-2 border-blue-500"} `}>
              Book
            </h1>
            <h1 onClick={() => setBookTrade("Trade")} className={`font-semibold text-white hover:cursor-pointer transition-all duration-75 ease-linear text-xs ${bookTrade == "Trade" && "border-b-2 border-blue-500"} `}>
              Trades
            </h1>
          </div>
          <div className="text-white p-4">
      <table className="w-full">
        <thead>
          <tr className="text-[0.6vw]">
            <th className="text-left " >Price (USDC)</th>
            <th className="text-center ">Size (BTC)</th>
            <th className="text-right" >Total (BTC)</th>
          </tr>
        </thead>  
          <Orderbook
          data= {[
        
        ]}
          />

          <h1 className='text-red-500 text-sm font-bold my-4 text-left'>Dummy Number</h1>
          <Orderbook
          data= {[
        ]}
          />
      </table>
    </div>
        </div>
      </div>
    </div>
  )
}

export default TradeInfo