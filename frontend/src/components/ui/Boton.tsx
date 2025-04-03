import React from "react";
import { twMerge } from "tailwind-merge";

interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; // Permite clases adicionales
}

const Boton: React.FC<BotonProps> = ({children,className}) => {
  return (
    <button
      className={twMerge(`relative overflow-hidden px-6 py-3 text-white font-bold rounded-md transition-all duration-300 group`,className)}
    >
      {children}
      <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent scale-0 group-hover:scale-150 transition-all duration-500"></span>
    </button>
  );
};

export default Boton;
