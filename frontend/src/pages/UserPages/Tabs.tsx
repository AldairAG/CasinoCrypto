import { IconName } from "../../components/ui/Icons";
import { icons } from "../../components/ui/Icons";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "profile", label: "Profile", icon: "profile" as IconName },
    { id: "dashboard", label: "Confirmación de identidad", icon: "dashboard" as IconName },
    { id: "verification", label: "Verificación de dos factores", icon: "verification" as IconName },
    { id: "password", label: "Cambiar email y password", icon: "password" as IconName },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex text-gray-500 dark:text-gray-400">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 border-b-2 transition flex items-center ${
                activeTab === tab.id
                  ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              <span className="mr-2">{icons[tab.icon]}</span>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tabs;


/* <div>
<Tabs defaultValue={'citas'}>
    <TabsList className="mb-4">
        <TabsTrigger value="citas">Calendario</TabsTrigger>
        <TabsTrigger value="busqueda">Buscar</TabsTrigger>
    </TabsList>

    <TabsContent value="citas">
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            <Card className={'space-y-2'}>
                <CardHeader>Calendario</CardHeader>
                <div>
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        locale={es} />
                </div>
            </Card>

            <Card>
                <CardHeader>Citas para {format(selectedDate, "PPP", { locale: es })}</CardHeader>

                <div>

                    <p className="text-muted-foreground">No hay citas programadas para esta fecha.</p>

                </div>
            </Card>
        </div>
    </TabsContent>

    <TabsContent value="busqueda">
        <Card>
            <CardHeader>
                <CardHeader>Buscar Paciente</CardHeader>
                <CardDescription>Busque por nombre o número telefónico</CardDescription>
            </CardHeader>
            <div className="space-y-6">
                <div>
                    <label htmlFor="search">Buscar</label>
                    <InputWhite
                        id="search"
                        placeholder="Nombre o teléfono"

                    />
                </div>


                <p className="text-muted-foreground">No se encontraron resultados.</p>


            </div>
        </Card>
    </TabsContent>
</Tabs>
</div> */

/* import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable react/prop-types 
const Tabs = ({ defaultValue, children, className }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <div className={twMerge("w-full", className)}>
            {children.map((child) =>
                child.type === TabsList
                    ? React.cloneElement(child, { activeTab, setActiveTab })
                    : React.cloneElement(child, { activeTab })
            )}
        </div>
    );
};

const TabsList = ({ children, activeTab, setActiveTab, className }) => (
    <div className={twMerge("mb-6 flex border-b", className)}>
        {children.map((child) =>
            React.cloneElement(child, { activeTab, setActiveTab })
        )}
    </div>
);

const TabsTrigger = ({ value, children, activeTab, setActiveTab, className }) => (
    <button
        className={twMerge(`px-4 py-2 border-b-2 ${activeTab === value ? "border-blue-500 font-bold" : "border-transparent"
            }`,className)}
        onClick={() => setActiveTab(value)}
    >
        {children}
    </button>
);

const TabsContent = ({ value, activeTab, children, className }) =>
    activeTab === value ? <div className={twMerge("mt-4",className)}>{children}</div> : null;

export { Tabs, TabsList, TabsTrigger, TabsContent }; */