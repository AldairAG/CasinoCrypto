import { IconName } from "../../components/ui/Icons";
import { icons } from "../../components/ui/Icons";

interface SidebarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab, activeTab }) => {
  const menuItems = [
    { id: "profile", label: "Perfil", icon: "profile" as IconName },
    { id: "history", label: "Historial", icon: "history" as IconName },
    { id: "aquestas", label: "Aquestas", icon: "quest" as IconName },
    { id: "transactions", label: "Transacciones", icon: "transaction" as IconName },
    { id: "faq", label: "FAQ", icon: "faq" as IconName },
    { id: "support", label: "Soporte", icon: "support" as IconName },
  ];

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Menú Principal</h3>
      </div>
      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center p-3 w-full rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{icons[item.icon]}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;