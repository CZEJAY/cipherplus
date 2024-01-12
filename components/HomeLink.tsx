"use client"
import { homeRoutes } from "@/lib/homeRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeLink = () => {
  const routes = homeRoutes;
  const pathname = usePathname()
  return (
    <div className="ml-20 flex w-full justify-between">
      {routes.map((route) => {
        const { icon: Icon} = route;
        const isActive = pathname === route.link
        return (
          <Link
            className={cn(
                "px-2 py-1 dark:text-gray-50 text-neutral-950/60 hover:underline transition-all font-semibold hover:opacity-95 flex gap-2 rounded-sm",
                isActive && " border text-neutral-950 dark:bg-dark-1 underline"
            )}
            key={route.name}
            href={route.link}
          >
            <Icon />
            {" "}
            {route.name}
          </Link>
        );
      })}
    </div>
  );
};

export default HomeLink;
