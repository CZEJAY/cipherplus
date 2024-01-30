import React from "react";
import { Input } from "../ui/input";
import Icon from "../Icons";

const SearchInput = () => {
  return (
    <div className="p-2 flex w-full items-center relative">
      <Input className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 h-12 dark:bg-neutral-950 bg-light-2 placeholder:text-neutral-500 dark:placeholder:text-neutral-500  ring-light-1  text-dark-1 dark:text-light-1 border-2 border-neutral-500/20 dark:border-light-1  rounded-full w-72" placeholder="Search..."/>
      <div className="">
        <Icon name="Search" className="cursor-pointer text-neutral-500  dark:text-light-1  absolute right-4 top-6" size={18}/>
      </div>
    </div>
  );
};

export default SearchInput;
