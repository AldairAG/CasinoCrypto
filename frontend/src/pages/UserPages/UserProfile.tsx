import { useState } from "react";
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
import MainDiv from "../../components/ui/MainDiv";
import { Sidebar, SidebarContent, SidebarItem, SidebarList } from "../../components/navigation/SiderBar";
import Accordion from "../../components/ui/Accordion";

const UserProfile: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>("profile");
  const [activeHistoryTab, setActiveHistoryTab] = useState<string>("operations");

  const sectionsWithoutMainTabs = ["history", "history_bets", "history_transactions", "faq", "support"];

  return (
    <MainDiv> 
      <Sidebar defaultValue="perfil" className="w-64 bg-gray-100 border-r">
        <SidebarList>
          <SidebarItem value="perfil">Perfil</SidebarItem>
          <SidebarItem value="wallets">Manejo de wallets</SidebarItem>
          <SidebarItem value="transacciones">Transacciones</SidebarItem>
          <SidebarItem value="apuestas">Apuestas</SidebarItem>
          <SidebarItem value="faq">Preguntas frecuentes</SidebarItem>
          <SidebarItem value="soporte">Soporte</SidebarItem>
        </SidebarList>
      </Sidebar>

      <div className="flex-1 p-6">
        <SidebarContent value="dashboard">
          <h1 className="text-2xl font-bold">📊 Dashboard</h1>
          <p>Bienvenido al panel principal.</p>
        </SidebarContent>

        <SidebarContent value="profile">
          <h1 className="text-2xl font-bold">👤 Perfil</h1>
          <p>Aquí puedes actualizar tu información personal.</p>
        </SidebarContent>

        <SidebarContent value="settings">
          <h1 className="text-2xl font-bold">⚙️ Configuración</h1>
          <p>Ajustes y preferencias de tu cuenta.</p>
        </SidebarContent>
      </div>

      {/* 

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {!sectionsWithoutMainTabs.includes(activeMainTab) && (
            <div className="px-6 pt-6">
              <Tabs activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
            </div>
          )}

          <div className="flex-1 p-6 overflow-auto">
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
      </div> */}
    </MainDiv>
  );
};

export default UserProfile;