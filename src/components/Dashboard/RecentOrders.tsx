import React from 'react'
import Image from 'next/image'
import { dummyOrderData } from '@/utils/constants'
import SingleOrder from './SingleOrder'

const RecentOrders = () => {
  return (
    <section className='flex flex-col gap-3 mt-[26px]'>
      <h3 className='text-lg font-bold'>Recent orders</h3>
      <div className='w-full overflow-x-scroll'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#f0f1f2] grid grid-cols-[56px,56px,1.5fr,1fr,1fr,1.5fr] rounded-t-lg border-b border-[#e4e5e5] text-xs font-normal text-gray text-left'>
              <th className='p-4'>
                {' '}
                <input type='checkbox' name='' id='' />
              </th>
              <th className='p-4'></th>
              <th className='p-4'>Product</th>
              <th className='p-4'>Status</th>
              <th className='p-4 te'>Quantity</th>
              <th className='p-4'>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrderData.map((order, i) => {
              return <SingleOrder key={i} order={order} />
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default RecentOrders
