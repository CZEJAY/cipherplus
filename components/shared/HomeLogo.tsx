import { Plus } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
type Props = {
  isDashboard?: boolean
}
const HomeLogo: FC<Props> = ({isDashboard}) => {
  return (
    <div>
      <Link href={isDashboard ? "/dashboard" : "/"} className="flex items-center gap-2">
        <img src="/light.jpg" className="h-8 w-8 rounded-full " alt="" />
        <span className="text-black dark:text-white font-bold tracking-widest uppercase  font-mono hidden sm:block sm:text-2xl relative bg-gradient-to-r from-violet-500 via-pink-800 to-yellow-400 bg-clip-text">
          DevConnector{" "}
          <Plus
            size={18}
            className="absolute top-0 -right-4 dark:text-white text-black"
          />
        </span>
      </Link>
    </div>
  );
};

export default HomeLogo;
