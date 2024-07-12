import React from 'react'
import Navbar from '@/components/dashboard/Navbar'
import Banner from '@/components/dashboard/Banner'
import MarketDetails from '@/components/dashboard/Markets/MarketDetails'
function page() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MarketDetails/>
    </div>
  )
}

export default page
