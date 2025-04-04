import React from "react";
import { twMerge } from "tailwind-merge";

const MainDiv: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={twMerge("w-full max-w-[1600px] p-6 h-full", className)}>
      {children}
    </div>
  );
}

export default MainDiv;