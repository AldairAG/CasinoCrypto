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
  //Recordar cambiar los tabs e ids para cambiar las pestañas
  const historyTabs = [
    { id: "casino", label: "Casino", icon: "casino" as IconName },
    { id: "quinela", label: "Quinela", icon: "ball" as IconName },
    { id: "apuesta", label: "Apuestas", icon: "payment" as IconName },
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
                    ? "text-white border-blue-600 dark:text-white dark:border-blue-500" // Cambiado a text-white
                    : "border-transparent text-white hover:text-gray-300 hover:border-gray-300 dark:text-gray-300 dark:hover:text-gray-400" // Cambiado a text-white
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