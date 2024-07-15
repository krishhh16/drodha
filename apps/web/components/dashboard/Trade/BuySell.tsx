'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import Cookies from "js-cookie";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

function BuySell() {
    const [authenticated, setIsAuthenticated] = useState<boolean>(false)
    const [buyOrSell, setTradeOff] = useState<"Buy" | "Sell">("Buy")
    const [marketType, setMarketType] = useState<"Limit" | "Market">("Limit")
    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
          setIsAuthenticated(false);
        }
      }, []);
  return (
    <div className='w-[20vw] h-full border border-slate-200/10'>
      <div className="flex w-full border-b border-slate-200/10 h-[8vh]">
        <h1 onClick={() => setTradeOff('Buy')} 
        className={`h-full text-sm ${buyOrSell != "Buy" && "hover:border-b-2"} flex justify-center items-center w-1/2 ${buyOrSell === "Buy" && "bg-opacity-30 bg-green-800 bordre-green-900"} text-green-300`}
        >
            Buy
        </h1>
        <h1 onClick={() => setTradeOff('Sell')} 
        className={`h-full text-sm ${buyOrSell != "Sell" && "hover:border-b-2"}  flex justify-center items-center w-1/2 ${buyOrSell === "Sell" && "bg-opacity-30 border-red-600 border-b-2 bg-red-900"} text-red-500` }
        >
            Sell
        </h1>
      </div>
      <div className="flex gap-6">
        <h1 onClick={() => setMarketType("Limit")} className={`text-slate-500 font-bold hover:cursor-pointer text-[0.85vw] ml-4 ${marketType == "Limit" && "border-b-4 border-blue-500 text-white"}`}>
            Limit
        </h1>
        <h1 onClick={() => setMarketType("Market")} className={`text-slate-500 font-bold hover:cursor-pointer text-[0.85vw] ml-4 ${marketType == "Market" && "border-b-4 border-blue-500 text-white"}`}>
            Market
        </h1>
      </div>
      {
        marketType == "Market" ?
        <Market authenticated = {authenticated}  />
        :
        <Limit authenticated = {authenticated}/>
      }
    </div>
  )
}

function Market(authenticated : {authenticated: boolean}) {
    const [priceQuantity, setPriceQuantity] = useState<number>(0)
    const [bitcoinVal, setBitcoinVal] = useState<number>(0)
    const vals = [{name: "Limit Price", value: "58733.1"},{name: "Limit Quantity", value: "-"},{name: "Order Vlaue", value: "-"}]
    const valsMaps = vals.map((data, ix) => {
        return (
            <div key={ix} className="flex justify-between">
                <h1 className="text-[0.7vw] text-slate-400 font-semibold">
                    {data.name}
                </h1>
                <h1 className="text-[0.7vw] text-white font-semibold">
                    {data.value}
                </h1>
            </div>
        )
    })
    return (
        <div className="m-1">
            <div className="flex items-center p-2 justify-between text-white">
                <h1 className="text-[0.7vw] text-zinc-400">
                    Available Balance
                </h1>
                <h1 className="text-[0.7vw]">
                    {authenticated.authenticated ? "100USDC" : "0.00USDC"}
                </h1>
            </div>
            <div className="p-2">
                <h1 className="text-slate-400 text-[0.7vw] mb-2">
                    Order Value 
                </h1>
                <div onClick={() => {
                    setPriceQuantity(1)
                } }  className={`flex items-center rounded-lg border transition-all ease-linear duration-0 p-1 border-zinc-400/40 ${priceQuantity == 1 && "border-blue-600"} `}>
                    <Input onChange={(e:any) => setBitcoinVal(e.target.value)}  value={`${bitcoinVal}`} className='border border-none text-white font-normal text-2xl text-right h-[5vh]' />
                    <img className="w-5 mr-1 h-5" src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fusdc.png&w=32&q=75" alt="usdc" />
                </div>
                    {
                        authenticated.authenticated ?
                <Button className="w-full mt-4 h-[5vh] rounded-xl mb-4" variant="outline">
                        
                        Trade

                </Button>
                        :
                <Button className="w-full h-[5vh] mb-4 rounded-xl" variant="outline">
                    <Link href={"/signup"}>
                        Sign up to trade
                    </Link>
                </Button>
                    }
                <div>
                    {
                       valsMaps
                    }
                </div>
            </div>  
        </div>
    )
}

function Limit(authenticated : {authenticated: boolean}) {
    const [priceQuantity, setPriceQuantity] = useState<number>(0)
    const [bitcoinVal, setBitcoinVal] = useState<number>(57176)
    const [usdcVal, setUsdcVal] = useState<number>(0)
    return (
        <div className="m-1">
            <div className="flex items-center p-2 justify-between text-white">
                <h1 className="text-[0.7vw] text-zinc-400">
                    Available Balance
                </h1>
                <h1 className="text-[0.7vw]">
                    {authenticated.authenticated ? "100USDC" : "0.00USDC"}
                </h1>
            </div>
            <div className="p-2">
                <h1 className="text-slate-400 text-[0.7vw] mb-2">
                    Price
                </h1>
                <div onClick={() => {
                    setPriceQuantity(1)
                } }  className={`flex items-center rounded-lg border transition-all ease-linear duration-0 p-1 border-zinc-400/40 ${priceQuantity == 1 && "border-blue-600"} `}>
                    <Input onChange={(e:any) => setBitcoinVal(e.target.value)}  value={`${bitcoinVal}`} className='border border-none text-white font-normal text-2xl text-right h-[5vh]' />
                    <img className="w-5 mr-1 h-5" src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fusdc.png&w=32&q=75" alt="usdc" />
                </div>
                <h1 className="text-slate-400 text-[0.7vw] my-2">
                    Quantity
                </h1>
                <div onClick={() => {
                    setPriceQuantity(2)
                } } className={`flex items-center rounded-lg border p-1 transition-all ease-linear duration-0 border-zinc-400/40 ${priceQuantity == 2 && "border-blue-600"} `}>
                    <Input onChange={(e:any) => setUsdcVal(e.target.value)}  value={`${usdcVal}`} className='border border-none text-white font-normal text-2xl text-right h-[5vh]' />
                    <img className="w-5 mr-1 h-5" src="https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=32&q=75" alt="usdc" />
                </div>
                <h1 className="text-slate-400 mt-2 text-right text-[0.7vw]">
                ≈ {bitcoinVal * usdcVal} USDC
                </h1>
                    {
                        authenticated.authenticated ?
                <Button className="w-full mt-4 h-[5vh] rounded-xl" variant="outline">
                        
                        Trade

                </Button>
                        :
                        <Button className="w-full h-[5vh] rounded-xl" variant="outline">
                            <Link href={"/signup"}>
                                Sign up to trade
                            </Link>
                        </Button>
                    }
                <div className="flex justify-between mt-4">
                    <div className="flex gap-1">
                        <Input  value={`${usdcVal}`}  type='checkbox' className='w-4 h-4' />
                        <h1 className="text-white text-xs">
                            Post Only
                        </h1>
                    </div>
                    <div className="flex gap-1">
                        <Input value={`${usdcVal}`}  type='checkbox' className='w-4 h-4' />
                        <h1 className="text-white text-xs">
                            IOC
                        </h1>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default BuySell
