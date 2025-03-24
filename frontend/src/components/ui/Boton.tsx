import React from "react";

interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string; // Color de fondo opcional
  className?: string; // Permite clases adicionales
}

const Boton: React.FC<BotonProps> = ({ color = "bg-blue-500", children, ...props }) => {
  return (
    <button
      {...props}
      className={`relative overflow-hidden ${color} px-6 py-3 text-white font-bold rounded-md transition-all duration-300 group`}
    >
      {children}
      <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent scale-0 group-hover:scale-150 transition-all duration-500"></span>
    </button>
  );
};

export default Boton;
