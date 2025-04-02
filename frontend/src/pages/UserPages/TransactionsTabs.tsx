import { IconName } from "../../components/ui/Icons";
import { icons } from "../../components/ui/Icons";

interface TransactionsTabsProps {
  activeSubTab: string;
  setActiveSubTab: (subTab: string) => void;
}

const TransactionsTabs: React.FC<TransactionsTabsProps> = ({ 
  activeSubTab, 
  setActiveSubTab 
}) => {
  const transactionsTabs = [
    { id: "ingreso", label: "Ingreso", icon: "ingreso" as IconName },
    { id: "retiro", label: "Retiro", icon: "egreso" as IconName },
    { id: "ganancia", label: "Ganancia", icon: "ganancia" as IconName },
  ];

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {transactionsTabs.map((tab) => (
            <li key={tab.id} className="mr-2">
              <button
                onClick={() => setActiveSubTab(tab.id)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeSubTab === tab.id
                    ? "text-white border-blue-600 dark:text-white dark:border-blue-500"
                    : "border-transparent text-gray-100 hover:text-white hover:border-gray-300 dark:text-gray-100 dark:hover:text-white"
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

export default TransactionsTabs;