import { Button } from '@/components/ui/button'
import React from 'react'
import { Plus} from "lucide-react"
import { ModeToggle } from '@/components/ThemeSwitch'
import Link from 'next/link'

const Header = () => {
  return (
    <nav
    className='
    w-full h-20 bg-transparent backdrop-blur-lg text-white flex items-center justify-between px-4 fixed top-0 shadow-xl z-50 
    '
    >
        <Link href={"/"} className="flex items-center gap-2">
        <img src="/light.jpg" className='h-8 w-8 rounded-full ' alt="" />
        <span className='text-black dark:text-white font-bold tracking-widest uppercase  font-mono hidden sm:block sm:text-2xl relative bg-gradient-to-r from-violet-500 via-pink-800 to-yellow-400 bg-clip-text'>Cipherplus <Plus size={18} className='absolute top-0 -right-4 dark:text-white text-black' /></span>
        </Link>

        <div className=" flex items-center gap-1">
            <Button className='
            dark:bg-gray-100  dark:text-sky-50
            gradient hover:opacity-70 transition-all duration-200
             border'>Get Started</Button>
            <Button variant='outline' className='text-gray-950 dark:text-gray-50'>Login</Button>
            <div className="text-black dark:text-gray-50">
            <ModeToggle  />
            </div>
        </div>
    </nav>
  )
}

export default Header