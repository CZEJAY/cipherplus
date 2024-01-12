import React from "react";
import { Input } from "../ui/input";
import Icon from "../Icons";

const SearchInput = () => {
  return (
    <div className="p-2 flex w-full items-center relative">
      <Input className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 h-9 dark:bg-neutral-950 bg-light-2 placeholder:text-dark-1 dark:placeholder:text-light-1 ring-white w-full text-dark-1 dark:text-light-1 border-2 border-dark-1 dark:border-light-2" placeholder="Search..."/>
      <div className="">
        <Icon name="Search" className="cursor-pointer text-dark-1 dark:text-light-1 absolute right-4 top-4" size={18}/>
      </div>
    </div>
  );
};

export default SearchInput;
