// import { IconName } from "../../components/ui/Icons";
// import { icons } from "../../components/ui/Icons";

// interface SidebarProps {
//   setActiveTab: (tab: string) => void;
//   activeTab: string;
// }

// const Sidebar: React.FC<SidebarProps> = ({ setActiveTab, activeTab }) => {
//   const menuItems = [
//     { id: "profile", label: "Perfil", icon: "profile" as IconName },
//     { id: "history", label: "Historial", icon: "history" as IconName },
//     { id: "aquestas", label: "Apuestas", icon: "quest" as IconName },
//     { id: "transactions", label: "Transacciones", icon: "transaction" as IconName },
//     { id: "faq", label: "FAQ", icon: "faq" as IconName },
//     { id: "support", label: "Soporte", icon: "support" as IconName },
//   ];

//   return (
//     <div className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Menú Principal</h3>
//       </div>
//       <ul className="space-y-1 text-gray-700 dark:text-gray-300">
//         {menuItems.map((item) => (
//           <li key={item.id}>
//             <button
//               onClick={() => setActiveTab(item.id)}
//               className={`flex items-center p-3 w-full rounded-lg transition-colors ${
//                 activeTab === item.id
//                   ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               <span className="mr-3">{icons[item.icon]}</span>
//               {item.label}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import { IconName } from "../../components/ui/Icons";
import { icons } from "../../components/ui/Icons";
import { useState } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveHistoryTab?: (tab: string) => void; // Nueva prop opcional
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab,
  setActiveHistoryTab 
}) => {
  const [showHistorySubmenu, setShowHistorySubmenu] = useState(false);

  const handleHistoryClick = () => {
    setActiveTab('history');
    setShowHistorySubmenu(!showHistorySubmenu);
    // Resetear a la pestaña por defecto del historial si existe
    if (setActiveHistoryTab) {
      setActiveHistoryTab('operations');
    }
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
      icon: "history" as IconName,
    },
    { id: "faq", label: "FAQ", icon: "faq" as IconName },
    { id: "support", label: "Soporte", icon: "support" as IconName },
  ];

  const historySubMenuItems = [
    { id: "bets", label: "Apuestas", icon: "quest" as IconName },
    { id: "transactions", label: "Transacciones", icon: "transaction" as IconName },
  ];

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Menú Principal</h3>
      </div>
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
                className={`flex items-center p-3 w-full rounded-lg transition-colors ${
                  activeTab === item.id || (item.id === "history" && showHistorySubmenu)
                    ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-3">{icons[item.icon]}</span>
                {item.label}
                {item.id === "history" && (
                  <span className="ml-auto">
                    {showHistorySubmenu ? '▼' : '▶'}
                  </span>
                )}
              </button>
              
              {item.id === "history" && showHistorySubmenu && (
                <ul className="ml-4 mt-1 space-y-1">
                  {historySubMenuItems.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        onClick={() => {
                          setActiveTab(`history_${subItem.id}`);
                        }}
                        className={`flex items-center p-3 w-full rounded-lg transition-colors ${
                          activeTab === `history_${subItem.id}`
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
    </div>
  );
};

export default Sidebar;