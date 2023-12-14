import { Button } from '@/components/ui/button'
import React from 'react'

const BentoGrid = () => {
  return (
    <div className='grid grid-cols-3 justify-center gap-4 grid-flow-dense bg-transparent backdrop-blur-xl w-[395px] px-4 sm:w-[700px] lg:w-[1000px] p-1 rounded-md '>

        <div className="flex flex-col gap-2 bg-neutral-200/5 col-span-2 overflow-hidden w-fit rounded-sm border px-2 pb-2">
            <h4 className='text-sm font-semibold leading-tight capitalize text-center sm:text-xl text-blue-500'>Are you looking for the best teams?</h4>
            <p className='text-sm sm:text-xl p-1 font-normal'> <span className='text-blue-300'>Cipherplus</span>&apos;s got you covered, with seasoned developers, with great team spirit your next big project will be delivered in no time.</p>
            <Button className='bg-blue-500 hover:bg-blue-500/40 dark:text-white mt-auto '>View Teams</Button>
        </div>

        <div className="flex bg-neutral-200/5">
            <img src="/team.gif" className='rounded-sm w-full h-full object-cover' alt="" />
        </div>

        <div className="flex p-4 bg-neutral-200"></div>
        <div className="flex p-4 bg-neutral-200 col-span-2"></div>
        <div className="flex p-4 bg-neutral-200 "></div>
        <div className="flex p-4 flex-col gap-2 bg-neutral-200 col-span-2">
          <h4 className='text-sm font-semibold leading-tight capitalize text-center sm:text-xl text-purple-500'>Do you need a standalone highly skilled Software Developer?</h4>
          <p>We offer the best of our kind, so you'd minimize cost but yet get the job done with just one developer.</p>
          <Button className='bg-purple-500 hover:bg-blue-500/40 dark:text-white '>View Developers</Button>
        </div>
    </div>
  )
}

export default BentoGrid