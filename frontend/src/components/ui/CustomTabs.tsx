import React from "react";
import { twMerge } from "tailwind-merge";

// Definición de tipos principales
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface TabCommonProps {
  className?: string;
  children?: React.ReactNode;
}

// Props específicas para cada componente
interface TabsListProps extends TabCommonProps {
  children: React.ReactNode;
}

interface TabsTriggerProps extends TabCommonProps {
  value: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface TabsContentProps extends TabCommonProps {
  value: string;
}

// Contexto para compartir el estado activo
const TabsContext = React.createContext<{
  activeValue: string;
  onValueChange?: (value: string) => void;
}>({ activeValue: '' });

// Componente Tabs principal
export const Tabs: React.FC<TabsProps> = ({ 
  defaultValue, 
  value, 
  onValueChange, 
  children, 
  className,
  ...props
}) => {
  const activeValue = value || defaultValue;

  return (
    <TabsContext.Provider value={{ activeValue, onValueChange }}>
      <div className={twMerge("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Componente TabsList
export const TabsList: React.FC<TabsListProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={twMerge("mb-6 flex border-b border-gray-200", className)}>
      {children}
    </div>
  );
};

// Componente TabsTrigger
export const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value, 
  children, 
  className, 
  ...props 
}) => {
  const { activeValue, onValueChange } = React.useContext(TabsContext);

  return (
    <button
      className={twMerge(
        `px-4 py-2 border-b-2 transition-colors duration-200 ${
          activeValue === value
            ? "border-blue-500 font-semibold text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`,
        className
      )}
      onClick={() => onValueChange?.(value)}
      {...props}
    >
      {children}
    </button>
  );
};

// Componente TabsContent
export const TabsContent: React.FC<TabsContentProps> = ({ 
  value, 
  children, 
  className 
}) => {
  const { activeValue } = React.useContext(TabsContext);

  return activeValue === value ? (
    <div className={twMerge("mt-4", className)}>{children}</div>
  ) : null;
};