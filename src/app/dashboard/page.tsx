'use client'
import React from 'react'

import Canvas from '@/components/Dashboard/Canvas'
import ProductionLine from '@/components/Dashboard/ProductionLine'
import RecentOrders from '@/components/Dashboard/RecentOrders'
import DashboardChart from '@/components/DashboardChart'

const Dashboard = () => {
  return (
    <div className='w-[95%] lg:w-full mx-auto grid grid-cols-[1fr,auto] gap-5'>
      <div className='w-full overflow-hidden'>
        <section className='flex flex-col gap-3'>
          <h3 className='text-lg font-bold'>Sales trend</h3>
          <div className='bg-white p-4 h-[340px]'>
            <DashboardChart />
          </div>
        </section>
        <ProductionLine />
        <RecentOrders />
      </div>
      <Canvas />
    </div>
  )
}

export default Dashboard
