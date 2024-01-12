"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowDownRightSquareIcon } from "lucide-react";
import LogoutButton from "./auth/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaUser } from "react-icons/fa";

/**
 *This component is used to display the user image when the user is logged in.
 * @return {
 * name: string;
 * Image: string;
 * id: string;
 * }
 */
const UserButton = () => {
  const { data: session } = useSession();
  
  const user = session?.user;
  // console.log(session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="border">
          <AvatarImage src={user?.image || ""} className="" />
          <AvatarFallback className="bg-black">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        {/* <Image alt='User Profile Picture' src={user?.image as string}/> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem onClick={() => signOut()}>
          <ArrowDownRightSquareIcon className="h-4 w-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
