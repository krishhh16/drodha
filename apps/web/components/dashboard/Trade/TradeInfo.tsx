import React from 'react'
import { useParams } from 'next/navigation'

function TradeInfo() {
    //@ts-ignore
    const [base, quote]= useParams().market.split("_")

  return (
    <div onClick={() => console.log(base, quote)} className="w-[80vw] h-full">
      <div className="h-[10vh] flex items-center justify-left w-full border-y border-slate-400/30">
            <h1>{base + "/" + quote}</h1>
      </div>
    </div>
  )
}

export default TradeInfo