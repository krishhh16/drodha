import React from 'react'
import { marketsInterface } from './MarketDetails'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function MarketComp({attribute, markets, additionalStyles}: marketsInterface) {

    const market = markets.map((market, ix) => {
        return (
            <div className="px-2 flex justify-between">
                <div className="flex justify-startr">
                    <Avatar>
                        <AvatarImage className="w-5 rounded-full object-cover h-5" src={market.avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-xs ml-[-15px] font-light">
                        {market.name}
                    </h1>
                </div>
                <p className="flex  ">
                    {"$" + market.price}
                </p>
            </div>
        ) 
    })
  return (
    <div className={`bg-[#15141B] text-white p-4 rounded-lg   ${additionalStyles}`}>
        <h1 className="px-2 text-sm mb-4">
            {attribute}
        </h1>
        {
            market
        }
    </div>
  )
}

export default MarketComp
