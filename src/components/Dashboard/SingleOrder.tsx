import { OrderType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  order: OrderType
}

const SingleOrder = ({ order }: Props) => {
  return (
    <tr className='bg-white grid grid-cols-[56px,56px,1.5fr,1fr,1fr,1.5fr] border-b border-[#e4e5e5]'>
      <td className='p-4'>
        <input type='checkbox' name='' id='' />
      </td>
      <td className='p-4'>
        <Image
          src={order.image}
          alt={order.product}
          height={40}
          width={40}
          className='rounded-lg'
        />
      </td>
      <td className='p-4 text-sm font-normal text-secondary'>
        {order.product}
      </td>
      <td className='p-4'>
        <span className='bg-[#ECF7F9] text-xs font-normal text-[#0B7D8E] capitalize p-1 rounded-lg'>
          {order.status}
        </span>
      </td>
      <td className='p-4 text-sm font-normal text-gray'>{order.qty} units</td>
      <td className='p-4 text-sm font-normal text-secondary'>
        {order.supplier}
      </td>
    </tr>
  )
}

export default SingleOrder
