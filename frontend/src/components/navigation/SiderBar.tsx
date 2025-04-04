import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Card, CardHeader } from "../cards/Card";

interface SidebarProps {
    defaultValue: string;
    children: React.ReactNode;
    className?: string;
}

interface SidebarListProps {
    children: React.ReactNode;
    className?: string;
    activeItem?: string;
    setActiveItem?: (value: string) => void
}

interface SidebarItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

interface SidebarContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ defaultValue, children, className }) => {
    const [activeItem, setActiveItem] = useState(defaultValue);

    return (
        <div className={twMerge("flex h-full", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement<{ activeItem?: string; setActiveItem?: (value: string) => void }>(child)
                    ? React.cloneElement(child, { activeItem, setActiveItem })
                    : child
            )}
        </div>
    );
};

const SidebarList: React.FC<SidebarListProps> = ({ children,className, activeItem, setActiveItem }) => (
    <Card className={twMerge("w-64 p-4", className)}>
        <CardHeader className="text-lg mb-4">Menu</CardHeader>
        {React.Children.map(children, (child) =>
            React.isValidElement<SidebarItemProps & { activeItem?: string; setActiveItem?: (value: string) => void }>(child)
                ? React.cloneElement(child, { activeItem, setActiveItem })
                : child
        )}
    </Card>
);

const SidebarItem: React.FC<SidebarItemProps & { activeItem?: string; setActiveItem?: (value: string) => void }> = ({
    value,children,className,activeItem,setActiveItem,
}) => (
    <button
        className={twMerge(
            "w-full text-left px-4 py-2 rounded-md transition",
            activeItem === value ? "bg-blue-500 text-white" : "hover:bg-gray-200",
            className
        )}
        onClick={() => setActiveItem?.(value)}
    >
        {children}
    </button>
);

const SidebarContent: React.FC<SidebarContentProps & { activeItem?: string }> = ({ value, children, className, activeItem }) =>
    activeItem === value ? <div className={twMerge("", className)}>{children}</div> : null;

export { Sidebar, SidebarList, SidebarItem, SidebarContent };
