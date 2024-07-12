import React from 'react'
import Navbar from '@/components/dashboard/Navbar'
import Banner from '@/components/dashboard/Banner'
import MarketDetails from '@/components/dashboard/Markets/MarketDetails'
import Markets from '@/components/dashboard/TradeMarkets/Markets'
function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MarketDetails/>
      <Markets/>
    </div>
  )
}

export default page
