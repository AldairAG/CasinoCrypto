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