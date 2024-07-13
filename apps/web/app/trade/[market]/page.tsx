'use client'
import Navbar from '@/components/dashboard/Navbar'
import BuySell from '@/components/dashboard/Trade/BuySell'
import TradeInfo from '@/components/dashboard/Trade/TradeInfo'
import { useParams } from 'next/navigation'

function page() {
    const params = useParams()
    return (
        <div>
            <Navbar/>
            <div className="flex w-[100vw] h-screen">
                <TradeInfo/>
                <BuySell/>
            </div>
        </div>
    )
}

export default page