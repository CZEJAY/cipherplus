"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';

const UserButton = () => {
    const {data: session} = useSession();
    console.log(session);
  return (
    <div>
        <Image 
        src={session?.user?.image as string}
        alt='User'
        width={50}
        height={50}
        className='rounded-full'

         />
    </div>
  )
}

export default UserButton