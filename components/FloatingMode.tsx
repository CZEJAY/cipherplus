"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const FloatingMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if(!mounted){
        setMounted(true)
    }
  
  }, [])

  if(!mounted) return null
  
  return (
    <motion.div
      
      className="fixed bottom-4 right-5 backdrop:blur-md rounded-full border bg-black p-1 h-10 w-10 cursor-pointer hover:opacity-90 transition-all"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-white w-full h-full" onClick={() => setTheme("light")} />
      ) : (
        <Moon size={20} className="text-white w-full h-full" onClick={() => setTheme("dark")} />
      )}
    </motion.div>
  );
};

export default FloatingMode;
