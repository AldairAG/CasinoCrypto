import { IconName } from "../../components/ui/Icons";
import { icons } from "../../components/ui/Icons";

interface HistoryTabsProps {
  activeSubTab: string;
  setActiveSubTab: (subTab: string) => void;
}

const HistoryTabs: React.FC<HistoryTabsProps> = ({ 
  activeSubTab, 
  setActiveSubTab 
}) => {
  // Solo las nuevas tabs para historial
  const historyTabs = [
    { id: "operations", label: "Operaciones", icon: "operation" as IconName },
    { id: "payments", label: "Pagos", icon: "payment" as IconName },
    { id: "movements", label: "Movimientos", icon: "movement" as IconName },
  ];

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {historyTabs.map((tab) => (
            <li key={tab.id} className="mr-2">
              <button
                onClick={() => setActiveSubTab(tab.id)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeSubTab === tab.id
                    ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">{icons[tab.icon]}</span>
                  {tab.label}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryTabs;