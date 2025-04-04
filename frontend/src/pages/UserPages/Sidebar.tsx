import { Card, CardHeader } from "../../components/cards/Card";
import { IconName } from "../../components/icons/Icons";
import { icons } from "../../components/icons/Icons";
import { useState } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveHistoryTab?: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  setActiveHistoryTab
}) => {
  const [showHistorySubmenu, setShowHistorySubmenu] = useState(false);

  // CAMBIO: Simplificada la función para solo manejar el despliegue del submenú
  const handleHistoryClick = () => {
    setShowHistorySubmenu(!showHistorySubmenu);
  };

  const handleOtherTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setShowHistorySubmenu(false);
  };

  const mainMenuItems = [
    { id: "profile", label: "Perfil", icon: "profile" as IconName },
    {
      id: "history",
      label: "Historial",
      icon: "historial" as IconName,
    },
    { id: "faq", label: "FAQ", icon: "faq" as IconName },
    { id: "support", label: "Soporte", icon: "support" as IconName },
  ];

  // CAMBIO: Items del submenú actualizados con contenido específico
  const historySubMenuItems = [
    {
      id: "bets",
      label: "Apuestas",
      icon: "apuestas" as IconName,
      contentTab: "history_bets" // Nueva propiedad para definir qué tab mostrar
    },
    {
      id: "transactions",
      label: "Transacciones",
      icon: "transaction" as IconName,
      contentTab: "history_transactions"
    },
  ];

  return (
    <Card className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
      <CardHeader className="text-lg mb-4">Menú Principal</CardHeader>

      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
        {mainMenuItems.map((item) => (
          <li key={item.id}>
            <div className="flex flex-col">
              <button
                onClick={() =>
                  item.id === "history"
                    ? handleHistoryClick()
                    : handleOtherTabClick(item.id)
                }
                className={`flex items-center p-3 w-full rounded-lg transition-colors ${activeTab === item.id || (item.id === "history" && showHistorySubmenu)
                    ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                <span className="mr-3">{icons[item.icon]}</span>
                {item.label}
                {item.id === "history" && (
                  <span className="ml-auto">
                    {showHistorySubmenu ? (
                      <span className="text-gray-500 dark:text-gray-400">
                        {icons.arrow1} {/* icono del historial */}
                      </span>
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">
                        {icons.arrow2} {/* icono del historial*/}
                      </span>
                    )}
                  </span>
                )}
              </button>

              {item.id === "history" && showHistorySubmenu && (
                <ul className="ml-4 mt-1 space-y-1">
                  {historySubMenuItems.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        onClick={() => {
                          // CAMBIO: Ahora usamos contentTab para definir qué mostrar
                          setActiveTab(subItem.contentTab);
                          if (setActiveHistoryTab) {
                            setActiveHistoryTab('casino'); // Resetear a la pestaña por defecto
                          }
                        }}
                        className={`flex items-center p-3 w-full rounded-lg transition-colors ${activeTab === subItem.contentTab
                            ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        <span className="mr-3">{icons[subItem.icon]}</span>
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Sidebar;