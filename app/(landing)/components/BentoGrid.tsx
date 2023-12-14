import React from 'react'

const BentoGrid = () => {
  return (
    <div className='grid grid-cols-3 gap-4 grid-flow-dense -bg-transparent backdrop-blur-xl w-[340px] px-4 sm:w-[700px] lg:w p-1 rounded-md '>

        <div className="flex flex-col gap-2 bg-neutral-200/5 col-span-2 overflow-hidden w-fit rounded-sm border">
            <h4 className='text-sm font-semibold leading-tight capitalize text-center'>Are you looking for the best teams?</h4>
            <p className='text-sm p-1 font-'> <span className='text-blue-300'>Cipherplus</span>&apos;s got you covered, with seasoned developers, with great team spirit your next big project will be delivered in no time.</p>
        </div>

        <div className="flex bg-neutral-200/5">
            <img src="/team.gif" className='rounded-sm w-full h-full object-cover' alt="" />
        </div>

        <div className="flex p-4 bg-neutral-200"></div>
        <div className="flex p-4 bg-neutral-200"></div>
        <div className="flex p-4 bg-neutral-200 row-span-2"></div>
        <div className="flex p-4 bg-neutral-200 col-span-2"></div>
    </div>
  )
}

export default BentoGrid