"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LucideInfo } from "lucide-react";

interface InfoProps {
  text: string;
}

const Info: React.FC<InfoProps> = ({ text }) => {
  return (
    <Popover>
      <PopoverTrigger><LucideInfo size={20} /></PopoverTrigger>
      <PopoverContent className="w-auto p-1 text-sm">{text}</PopoverContent>
    </Popover>
  );
};

export default Info;
