import React, { cloneElement, isValidElement, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabsProps {
    defaultValue: string;
    children: React.ReactNode;
    className?: string;
}

interface TabsListProps {
    children: React.ReactNode;
    activeTab?: string;
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    activeTab?: string;
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
}

interface TabsContentProps {
    value: string;
    activeTab?: string;
    children: React.ReactNode;
    className?: string;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className }) => {
    const [activeTab, setActiveTab] = useState<string>(defaultValue);

    const childrenWithProps = React.Children.map(children, (child) => {
        if (isValidElement(child) && child.type === TabsList) {
            return cloneElement(child as React.ReactElement<TabsTriggerProps>, { activeTab, setActiveTab });
        } 
        if (isValidElement(child) && child.type === TabsContent) {
            return cloneElement(child as React.ReactElement<TabsContentProps>, { activeTab });
        } else return null;
    })

    return (
        <div className={twMerge("w-full", className)}>
            {childrenWithProps}
        </div>
    )
};

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, setActiveTab, className }) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (isValidElement<TabsTriggerProps>(child) && child.type === TabsTrigger) {
            return cloneElement<TabsTriggerProps>(child, { activeTab, setActiveTab });
        } else return null;
    })


    return (
        <div className={twMerge("mb-6 flex border-b text-sm", className)}>
            {childrenWithProps}
        </div>
    )
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({
    value,
    children,
    activeTab,
    setActiveTab,
    className,
    activeClassName = "border-blue-500 font-bold stroke-3 text-blue-500",
    inactiveClassName = "border-transparent"
  }) => {
    const isActive = activeTab === value;
  
    return (
      <button
      type="button"
        className={twMerge(
          "px-4 py-2 border-b-2",
          isActive ? activeClassName : inactiveClassName,
          className
        )}
        onClick={() => setActiveTab?.(value)}
      >
        {children}
      </button>
    );
  };
  

const TabsContent: React.FC<TabsContentProps> = ({ value, activeTab, children, className }) => {
    return (
        activeTab === value ? <div className={twMerge("mt-4", className)}>{children}</div> : null
    )

}


export { Tabs, TabsList, TabsTrigger, TabsContent };