"use client"
import UserButton from "@/components/UserButton";
import MenuTrigger from "@/components/shared/MenuTrigger";
import SearchInput from "@/components/shared/SearchInput";
import { Input } from "@/components/ui/input";
import { BellIcon, Calendar, ChevronDown, MenuSquare } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

const Header =  () => {
  const { data } = useSession()
  return (
    <div className="topbar1">
      <div className="hidden lg:flex text-zinc-800 dark:text-light-1 text-xl font-semibold font-['Plus Jakarta Sans'] leading-7">
        <h1 className="text-2xl">Dashboard</h1>
      </div>

      <div className="justify-between md:justify-end gap-10 items-center flex w-full lg:w-[70%]  ">
        <div className="flex md:hidden mr-auto">
          <MenuTrigger />
        </div>
        <div className="max-sm:hidden">
          <SearchInput />
        </div>
        <div className="flex text-zinc-800 dark:text-light-1 gap-2 items-center justify-center">
          <Calendar className=" " />
          <span className="hidden lg:flex text-sm font-extrabold font-['Inter'] leading-snug">
            November 15, 2024
          </span>
        </div>
        <div className="flex items-center justify-center border p-1 border-neutral-500/20 rounded-full text-zinc-800 dark:text-light-1">
          <BellIcon />
        </div>
        <div className="px-2 py-1.5 rounded-[28px] border border-zinc-300 justify-center items-center gap-3 flex relative">
          <div className="justify-start items-center gap-2 flex">
            <UserButton />
            <div className="flex-col justify-start items-center gap-1 inline-flex">
              <div className=" text-zinc-800 hidden lg:flex dark:text-light-1 text-base font-normal font-['Inter'] text-center">
                {
                  data?.user?.name
                }
              </div>
              <div className="text-right text-zinc-500 dark:text-light-1 hidden lg:flex text-sm font-normal font-['Inter']">
                {
                  data?.user?.email
                }
              </div>
            </div>
            <div className="flex absolute top-4 text-zinc-800  dark:text-light-1 right-2">
              <ChevronDown className="cursor-pointer" />
            </div>
          </div>
          <div className="w-5 h-5 relative" />
        </div>
      </div>
    </div>
  );
};

export default Header;
