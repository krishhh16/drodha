'use client'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Cookies from "js-cookie";

function Navbar() {
    const [authenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
          setIsAuthenticated(true);
        }
      }, []);
  return (
    <div className="w-full h-[8vh] flex justify-between border-b border-slate-200/20  ">
      <div className="flex justify-evenly w-[40%] h-full p-2">
        <div className="flex w-1/3 items-center">
            <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtZgmQ0kSgVJpzCVvCMQfoafRXmfkcEhZcg&s" alt=""/>
            <h1 className="text-white font-bold text-sm">CryptoExchange</h1>
        </div>
        <div className="flex justify-evenly items-center w-1/3">
            <h1 className="text-xs font-bold text-white">Markets</h1>
            <h1 className="text-xs font-bold text-zinc-500">Trade</h1>
        </div>
        <div id="search" className="w-1/3 flex items-center">
            <Input type="search" className='bg-zinc-800 border-none rounded-xl h-[3.5vh]'  placeholder="Search Markets"/>
        </div>
      </div>
      {
        authenticated ? 
      <div className="p-4 flex justify-evenly w-[15%]">
            <Button className="text-xs bg-green-800 bg-opacity-60 text-green-300" variant="default">View past trades </Button>
            <Button className="text-xs bg-blue-800 bg-opacity-40 text-blue-300" variant="default">Something</Button>
      </div>
        :
        <div className="p-4 flex justify-evenly w-[15%]">
            <Button className="text-xs bg-green-800 bg-opacity-60 text-green-300" variant="default">Sign up</Button>
            <Button className="text-xs bg-blue-800 bg-opacity-40 text-blue-300" variant="default">Sign in</Button>
      </div>
      }
    </div>
  )
}

export default Navbar
