
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

  // CAMBIO: Secciones actualizadas donde NO mostrar las tabs principales
  const sectionsWithoutMainTabs = ["history", "history_bets", "history_transactions", "faq", "support"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full max-w-[1600px] gap-4 p-4 bg-gray-100 dark:bg-gray-900">
      <Sidebar
        activeTab={activeMainTab}
        setActiveTab={setActiveMainTab}
        setActiveHistoryTab={setActiveHistoryTab}
      />

      <div className="flex-1 flex flex-col h-full">
        {/* Mostrar tabs principales solo cuando NO estemos en las secciones definidas */}
        {!sectionsWithoutMainTabs.includes(activeMainTab) && (
          <Tabs activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
        )}

        <div className="flex-1 mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-auto">
          {activeMainTab === "profile" && <ProfileContent />}

          {/* CAMBIO: Sección history ahora solo muestra mensaje */}
          {activeMainTab === "history" && (
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-300">
                Selecciona una opción del menú Historial
              </p>
            </div>
          )}

          {/* CAMBIO: Nueva sección para las apuestas (contiene el contenido anterior del historial) */}
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

          {/* CAMBIO: Nueva sección para transacciones (puedes agregar contenido aquí) */}
          {/* {activeMainTab === "history_transactions" && (
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-300">
                Contenido de transacciones...
              </p>
            </div>
          )} */}
          {/* {activeMainTab === "history_transactions" && (
            <div className="mt-4">
              <TransactionsContent />
            </div>
          )} */}

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
  );
};

export default UserProfile;