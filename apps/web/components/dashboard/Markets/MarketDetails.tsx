import React from 'react'
import MarketComp from './MarketComp';

export interface marketsInterface {
    attribute: string;
    additionalStyles: string;
    markets: {name: string; price: number, avatar: string}[]
}

function MarketDetails() {
    const markets: marketsInterface[] = [
        {
            attribute: "New",
            additionalStyles: 'w-1/3',
            markets: [
                {
                    name: "MOTHER/USDC",
                    price: 0.0335,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fmother.png&w=32&q=75"
                },
                {
                    name: "ZEX/USDC",
                    price: 0.0662,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fzex.png&w=32&q=75"
                },
                {
                    name: "MOTHER/USDC",
                    price: 3.7577,
                    avatar: "https://backpack.exchange/coins/zro.svg"
                },
            ]
        },
        {
            attribute: "Top Gainers",
            additionalStyles: 'w-1/3',
            markets: [
                {
                    name: "MOTHER/USDC",
                    price: 0.0335,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fmother.png&w=32&q=75"
                },
                {
                    name: "BODEN/USDC",
                    price: 0.0429,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fboden.png&w=32&q=75"
                },
                {
                    name: "NYAN/USDC",
                    price: 0.1128,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fnyan.png&w=32&q=75"
                },
            ]
        },
        {
            attribute: "Experimental",
            additionalStyles: 'w-1/3',
            markets: [
                {
                    name: "MOTHER/USDC",
                    price: 0.0335,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fmother.png&w=32&q=75"
                },
                {
                    name: "UNA/USDC",
                    price: 0.12,
                    avatar: "https://backpack.exchange/coins/una.svg"
                },
                {
                    name: "HABIBI/USDC",
                    price: 0.12,
                    avatar: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fhabibi.png&w=32&q=75"
                },
            ]
        },
        
    ]

    const comps = markets.map((card, ix) => {
        return <MarketComp additionalStyles={card.additionalStyles} attribute={card.attribute} markets={card.markets}/>
    })
    return (
        <div className="max-w-[75%] mx-auto my-4">
            <h1 className="text-white mb-3 font-bold text-[1.7vw]">
                Markets
            </h1>
            <div className='flex gap-10'>
                    {
                        comps
                    }

            </div>
              
        </div>
  )
}

export default MarketDetails
