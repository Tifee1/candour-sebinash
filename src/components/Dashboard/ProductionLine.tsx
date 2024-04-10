import React from 'react'
import { dummyProductionLineData } from '@/utils/constants'
import SingleProductionLine from './SingleProductionLine'

const ProductionLine = () => {
  return (
    <section className='flex flex-col gap-3 mt-[22px]'>
      <h3 className='text-lg font-bold'>Production line</h3>
      <div className='w-full overflow-hidden'>
        <div className='flex gap-3 overflow-x-scroll no-scrollbar'>
          {dummyProductionLineData.map((productionLine, i) => {
            return (
              <SingleProductionLine key={i} productionLine={productionLine} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductionLine
