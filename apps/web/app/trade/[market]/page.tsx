'use client'
import Navbar from '@/components/dashboard/Navbar'
import { useParams } from 'next/navigation'

function page() {
    const params = useParams()
    return (
        <div>
            <Navbar/>
            
        </div>
    )
}

export default page