"use client"
import React from 'react'
import AutoText from './AutoText'
import { textArray } from '@/lib/textArray'

const Welcome = () => {
    
  return (
    <div className='z-20 w-full h-full'>
        <video src="/matrix.mp4" autoPlay loop muted></video>
        <AutoText textArray={textArray} speed={200} />
    </div>
  )
}

export default Welcome