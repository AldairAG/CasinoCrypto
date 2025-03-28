import { IconName } from "../../components/ui/Icons";
import { icons } from "../../components/ui/Icons";

interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  const menuItems = [
    { id: "profile", label: "Profile", icon: "profile" as IconName },
    { id: "dashboard", label: "Dashboard", icon: "dashboard" as IconName },
    { id: "settings", label: "Settings", icon: "settings" as IconName },
  ];

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className="flex items-center p-3 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="mr-2">{icons[item.icon]}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;