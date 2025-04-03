import React, { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
    <div className="relative inline-block" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md z-10">
                    {children}
                </div>
            )}
        </div>
    );
};

const DropdownMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="absolute right-0 mt-2 w-48 bg-white border-1 rounded-lg shadow-lg border-gray-200">
        {children}
    </div>
);

const DropdownMenuItem: React.FC<{ children: React.ReactNode, className?: string, variant?: 'default' | 'titulo' }> = ({ children, className, variant = 'default' }) => {
    const variantClasses = {
        default: "hover:bg-gray-100 text-gray-900",
        titulo: "font-bold text-gray-900",
    };
    return (

        <button className={twMerge(`w-full text-sm text-left px-4 py-2 ${variantClasses[variant]}`, className)}>
            {children}
        </button>
    )
};


export { DropdownMenu, DropdownMenuContent, DropdownMenuItem };