import { socialLinks } from "@/lib/homeRoutes";
import { CheckCheck, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import RightCard from "../RightCard";

const RightSideBar = () => {
  const socialLink = socialLinks;
  return (
    <div className="custom-scrollbar rightsidebar">
      <div className="flex w-full flex-col gap-6 items-center">
        <div className="flex items-center gap-3">
          <CheckCheck size={20} />
          <p className="font-semibold">Recommended Jobs</p>
        </div>
        <RightCard />
      </div>
      <div className="flex w-full flex-col gap-6 items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Social Links</p>
            <span>
              <Link2 />
            </span>
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            {socialLink.map((link, i) => {
              const { icon: Icon } = link;
              return (
                <Link className="py-1 px-2 rounded  bg-light-2 dark:bg-dark-4" key={i} href={link.href}>
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
