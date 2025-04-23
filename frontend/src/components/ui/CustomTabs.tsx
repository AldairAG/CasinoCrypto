import React from "react";
import { twMerge } from "tailwind-merge";

// Definición de tipos principales
// Props para el componente principal Tabs
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string; // Valor inicial por defecto
  value?: string; // Valor actual (controlado externamente)
  onValueChange?: (value: string) => void; // Callback para manejar cambios de valor
}

// Props comunes para los subcomponentes
interface TabCommonProps {
  className?: string; // Clases CSS adicionales
  children?: React.ReactNode; // Contenido del componente
}

// Props específicas para el componente TabsList
interface TabsListProps extends TabCommonProps {
  children: React.ReactNode; // Los hijos deben ser React nodes
}

// Props específicas para el componente TabsTrigger
interface TabsTriggerProps extends TabCommonProps {
  value: string; // Valor asociado al botón
  active?: boolean; // Indica si está activo
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Evento de clic
}

// Props específicas para el componente TabsContent
interface TabsContentProps extends TabCommonProps {
  value: string; // Valor asociado al contenido
}

// Contexto para compartir el estado activo entre los componentes
const TabsContext = React.createContext<{
  activeValue: string; // Valor activo actual
  onValueChange?: (value: string) => void; // Callback para manejar cambios
}>({ activeValue: '' });

// Componente Tabs principal
export const Tabs: React.FC<TabsProps> = ({ 
  defaultValue, 
  children, 
  className,
  ...props
}) => {
  const [value, setValue] = React.useState<string>(defaultValue); // Estado para manejar el valor activo

  return (
    <TabsContext.Provider value={{ activeValue: value, onValueChange: setValue }}>
      <div className={twMerge("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Componente TabsList: Contenedor para los botones de las pestañas
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

// Componente TabsTrigger: Botón para cambiar entre pestañas
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
            ? "border-blue-500 font-semibold text-blue-600" // Estilo activo
            : "border-transparent text-gray-500 hover:text-gray-700" // Estilo inactivo
        }`,
        className
      )}
      onClick={() => onValueChange?.(value)} // Cambia el valor activo al hacer clic
      {...props}
    >
      {children}
    </button>
  );
};

// Componente TabsContent: Contenido asociado a una pestaña específica
export const TabsContent: React.FC<TabsContentProps> = ({ 
  value, 
  children, 
  className 
}) => {
  const { activeValue } = React.useContext(TabsContext);

  return activeValue === value ? ( // Muestra el contenido solo si el valor coincide
    <div className={twMerge("mt-4", className)}>{children}</div>
  ) : null;
};

// Definición de tipos principales
// Ejemplo práctico de uso de los componentes Tabs, TabsList, TabsTrigger y TabsContent
const ExampleUsage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("tab1"); // Estado para manejar la pestaña activa

  return (
    <Tabs 
      defaultValue="tab1" 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="p-4 border rounded-md"
    >
      <TabsList>
        <TabsTrigger value="tab1">Pestaña 1</TabsTrigger>
        <TabsTrigger value="tab2">Pestaña 2</TabsTrigger>
        <TabsTrigger value="tab3">Pestaña 3</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tab1">
        <p>Contenido de la Pestaña 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Contenido de la Pestaña 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Contenido de la Pestaña 3</p>
      </TabsContent>
    </Tabs>
  );
};