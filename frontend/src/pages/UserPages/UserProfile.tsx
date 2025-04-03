import { useState } from "react";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import ProfileContent from "./ProfileContent";
import DashboardContent from "./IdentificationContent";
import PasswordContent from "./PasswordContent";
import VerificationContent from "./VerificationContent";
import HistoryTabs from "./HistoryTabs";
import CasinoContent from "./CasinoContent";
import ApuestasContent from "./ApuestasContent";
import QuinelaContent from "../UserPages/QuinelaContent";
import FAQContent from "./FAQContent";
import SupportContent from "./SupportContent";
import TransactionsContent from "./TransactionsContent";
import TransactionsTabs from "./TransactionsTabs";

const UserProfile: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>("profile");
  const [activeHistoryTab, setActiveHistoryTab] = useState<string>("operations");

  const sectionsWithoutMainTabs = ["history", "history_bets", "history_transactions", "faq", "support"];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1600px] gap-4 p-6 bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-32px)]"> {/* Ajuste clave aquí */}
      <Sidebar 
        activeTab={activeMainTab}
        setActiveTab={setActiveMainTab}
        setActiveHistoryTab={setActiveHistoryTab}
      />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> {/* Eliminado overflow-auto */}
          {!sectionsWithoutMainTabs.includes(activeMainTab) && (
            <div className="px-6 pt-6">
              <Tabs activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
            </div>
          )}

          <div className="flex-1 p-6 overflow-auto"> {/* Scroll solo en el contenido */}
            {activeMainTab === "profile" && <ProfileContent />}

            {activeMainTab === "history" && (
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Selecciona una opción del menú Historial
                </p>
              </div>
            )}

            {activeMainTab === "history_bets" && (
              <>
                <HistoryTabs
                  activeSubTab={activeHistoryTab}
                  setActiveSubTab={setActiveHistoryTab}
                />
                <div className="mt-4">
                  {activeHistoryTab === "casino" && <CasinoContent />}
                  {activeHistoryTab === "apuesta" && <ApuestasContent />}
                  {activeHistoryTab === "quinela" && <QuinelaContent />}
                </div>
              </>
            )}

            {activeMainTab === "history_transactions" && (
              <>
                <TransactionsTabs
                  activeSubTab={activeHistoryTab}
                  setActiveSubTab={setActiveHistoryTab}
                />
                <TransactionsContent subTab={activeHistoryTab} />
              </>
            )}

            {activeMainTab === "dashboard" && <DashboardContent />}
            {activeMainTab === "verification" && <VerificationContent />}
            {activeMainTab === "password" && <PasswordContent />}

            {activeMainTab === "faq" && (
              <FAQContent
                onNavigateToSupport={() => setActiveMainTab("support")}
              />
            )}

            {activeMainTab === "support" && <SupportContent />}
          </div>
        </div>
      </div>
      {/* FIN DE SECCIÓN MODIFICADA */}
    </div>
  );
};

export default UserProfile;