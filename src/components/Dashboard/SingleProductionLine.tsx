import { ProductionLineType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  productionLine: ProductionLineType
}

const SingleProductionLine = ({ productionLine }: Props) => {
  return (
    <div className='bg-white py-4 px-5 rounded-lg flex gap-3 items-center min-w-[228px]'>
      <Image
        src={productionLine.image}
        alt={productionLine.name}
        width={40}
        height={40}
        className='rounded-lg'
      />
      <div className='flex flex-col gap-1.5'>
        <h4 className='text-secondary text-xs font-medium'>
          {productionLine.name}
        </h4>
        <span className='text-gray text-xs font-normal'>
          {productionLine.unit} units
        </span>
      </div>
    </div>
  )
}

export default SingleProductionLine
