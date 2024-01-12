"use client";
import { sideBarLinks } from "@/lib/homeRoutes";
import React, { ReactNode } from "react";

const SideBar = () => {
  const sideRoutes = sideBarLinks;
  return (
    <aside className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6 text-primary">
        {sideRoutes.map((route) => {
          const { icon: Icon, label} = route
          return (
            <div className="flex w-44 items-center justify-start gap-4 rounded px-2 hover:underline hover:opacity-75 transition-all cursor-pointer dark:bg-dark-4 bg-light-2 py-2"
            key={label}
            >
              <Icon size={20} />
              <span className="text-sm md:text-md">{label}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
