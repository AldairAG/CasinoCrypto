import React from "react";
import { twMerge } from "tailwind-merge";

interface TrashButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const TrashButton: React.FC<TrashButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        `relative overflow-hidden p-2 bg-red-500 text-white rounded-md transition-all duration-300 hover:bg-red-600 group`,
        className
      )}
      aria-label="Delete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
      <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent scale-0 group-hover:scale-150 transition-all duration-500"></span>
    </button>
  );
};

export default TrashButton;