import React, { useState } from 'react'
import { useParams } from 'next/navigation'

function TradeInfo() {
    //@ts-ignore
    const [base, quote]= useParams().market.split("_")
    const [baseVal, quoteVal] = [59969.1, 0]
    const [bookTrade, setBookTrade] = useState<"Book" | "Trade">("Book")
  return (
    <div onClick={() => console.log(base, quote)} className="w-[80vw] h-full">
      <div className="h-[10vh] px-6 gap-10 flex items-center justify-left w-full border-y border-slate-400/30">
            <h1 className='text-white'>
              {base + "/" + quote}
            </h1>
            <div>
              <h1 className='text-green-600'>
                {baseVal}
              </h1>
              <h1 className='text-white text-xs'>
                ${baseVal}
              </h1>
            </div>
      </div>
      <div className="flex w-full h-[80vh]">
        <div className="w-[80%] h-full">
          <img className="w-full  object-contain" src="https://img.freepik.com/premium-photo/graph-with-word-graph-showing-word-graph_406811-36121.jpg?w=1380" alt="" />
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
        </div>
      </div>
    </div>
  )
}

export default TradeInfo