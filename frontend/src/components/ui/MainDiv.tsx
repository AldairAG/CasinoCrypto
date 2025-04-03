import React from "react";
import { twMerge } from "tailwind-merge";

const MainDiv: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={twMerge("flex", className)}>
      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default MainDiv;