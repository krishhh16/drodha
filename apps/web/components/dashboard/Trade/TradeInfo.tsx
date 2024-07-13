import React from 'react'
import { useParams } from 'next/navigation'

function TradeInfo() {
    const market = useParams()
  return (
    <div onClick={() => console.log(market)} className="w-[80vw] h-full">
      <div className="h-[10vh] w-full border-y border-slate-400/30">
        
      </div>
    </div>
  )
}

export default TradeInfo
 