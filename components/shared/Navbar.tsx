
import { Menu } from 'lucide-react'
import React from 'react'
import MenuTrigger from './MenuTrigger'
import UserButton from '../UserButton'
import SearchInput from './SearchInput'
import HomeLogo from './HomeLogo'
import HomeLink from '../HomeLink'
import { ModeToggle } from '../ThemeSwitch'

const Navbar = () => {
  return (
    <nav
    className='topbar'
    >
        <div className="flex">
            <div className="flex md:hidden"><MenuTrigger /></div>
            <div className="hidden md:flex items-center justify-between mr-5 w-full">
                <HomeLogo isDashboard />
                <HomeLink />
            </div>

        </div>

        <div className="flex-1 md:flex-none md:w-[400px] md:ml-auto">
            <SearchInput />
        </div>

        <div className="flex items-center gap-2">
            <ModeToggle />
            <UserButton />
        </div>
    </nav>
  )
}

export default Navbar