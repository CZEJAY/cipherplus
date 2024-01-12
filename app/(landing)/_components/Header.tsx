
import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";
import { ModeToggle } from "@/components/ThemeSwitch";
import Link from "next/link";
import { SignedIn, SignedOut } from "@/components/SignedIn";
import UserButton from "@/components/UserButton";
import "../../globals.css"

const Header = () => {
  return (
    <nav
      className="
    w-full h-20 bg-transparent backdrop-blur-sm sm:backdrop-blur-lg text-white flex items-center justify-between px-[2.5vw] fixed top-0 shadow-xl z-50
    "
    >
      <Link href={"/"} className="flex items-center gap-2">
        <img src="/light.jpg" className="h-8 w-8 rounded-full " alt="" />
        <span className="text-black dark:text-white font-bold tracking-widest uppercase  font-mono hidden sm:block sm:text-2xl relative bg-gradient-to-r from-violet-500 via-pink-800 to-yellow-400 bg-clip-text">
          DevConnector{" "}
          <Plus
            size={18}
            className="absolute top-0 -right-4 dark:text-white text-black"
          />
        </span>
      </Link>

      <SignedOut>
        <div className=" flex items-center gap-1">
          <Link href={"/auth/sign-up"}>
            <Button
              className="
            dark:bg-gray-100  dark:text-sky-50
            gradient hover:opacity-70 transition-all duration-200
             border"
            >
              Get Started
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button
              variant="outline"
              className="text-gray-950 dark:text-gray-50"
            >
              Login
            </Button>
          </Link>
          <div className="text-black dark:text-gray-50">
            <ModeToggle />
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex items-center gap-1">
          <Link href={"/dashboard"}>
            <Button
              className="
            dark:bg-gray-100  dark:text-sky-50
            gradient hover:opacity-70 transition-all duration-200
             border"
            >
              Dashboard
            </Button>
          </Link>
          <div className="text-black dark:text-gray-50 flex  gap-1">
            {/* <ModeToggle /> */}
            <UserButton />
          </div>
        </div>
      </SignedIn>
    </nav>
  );
};

export default Header;
