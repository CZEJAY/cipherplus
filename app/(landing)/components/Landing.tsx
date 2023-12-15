"use client"
import AutoText from '@/components/AutoText'
import { Verified } from 'lucide-react'
import React from 'react'

const Landing = () => {
    const textArray = ['Programmers', 'Development team', '']
    const speed = 200
  return (
    <div className={` bg-transparent dark:border-gray-50 border-gray-700 px-4 py-5  rounded-md`}>
      <div className="flex items-center justify-center bg-gray-300 dark:bg-blue-950 p-2 rounded-lg gap-3 sm:w-[30rem]">
        <Verified className='gradient bg-clip-text text-blue-500' />
        <p className='text-[.85rem] font-semibold'>Cipherplus <span className='text-blue-500'>offers the best</span> <i className=''>just name it?</i></p>
      </div>
      <div className="flex items-center justify-center">
      <p className='text-center max-w-md mt-2 text-sm text-gray-500 dark:text-gray-200'>Explore the world of secure coding with Cipherplus, your trusted partner in cybersecurity. "Verified by Cipherplus" is a dedicated section on our website crafted to empower programmers with the latest insights and tools for ensuring the utmost security in their code.</p>
      </div>
        <p className='text-[2.95rem] text-center  mt-4 gradient bg-clip-text '><span className='text-transparent font-bold italic '>Connect</span> with the best </p>
        <AutoText textArray={textArray} speed={speed} />
    </div>
  )
}

export default Landing