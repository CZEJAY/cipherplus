"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';

const UserButton = () => {
    const {data: session} = useSession();
    // console.log(session);
  return (
    <div className='cursor-pointer hover:opacity-75 duration-200'>
        <Image 
        src={session?.user?.image as string}
        alt='User'
        width={40}
        height={40}
        className='rounded-full'

         />
    </div>
  )
}

export default UserButton