import { useState } from "react";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import ProfileContent from "./ProfileContent";
import DashboardContent from "./DashboardContent";
import PasswordContent from "./PasswordContent";
import VerificationContent from "./VerificationContent";
import HistoryTabs from "./HistoryTabs";
import OperationsContent from "../UserPages/OperationsContent";
import PaymentsContent from "../UserPages/PaymentsContent";
import MovementsContent from "../UserPages/MovementsContent";
import FAQContent from "./FAQContent";

const UserProfile: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>("profile");
  const [activeHistoryTab, setActiveHistoryTab] = useState<string>("operations");

  // Definir en qué secciones NO mostrar las tabs principales
  const sectionsWithoutMainTabs = ["history", "faq"];

  return (
    <div className="flex flex-col md:flex-row h-full w-full max-w-[1600px] gap-4 p-4 bg-gray-100 dark:bg-gray-900">
      <Sidebar activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
      
      <div className="flex-1 p-6">
        {/* Mostrar tabs principales solo cuando NO estemos en las secciones definidas */}
        {!sectionsWithoutMainTabs.includes(activeMainTab) && (
          <Tabs activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
        )}
        
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {activeMainTab === "profile" && <ProfileContent />}
          
          {activeMainTab === "history" && (
            <>
              <HistoryTabs 
                activeSubTab={activeHistoryTab} 
                setActiveSubTab={setActiveHistoryTab} 
              />
              {activeHistoryTab === "operations" && <OperationsContent />}
              {activeHistoryTab === "payments" && <PaymentsContent />}
              {activeHistoryTab === "movements" && <MovementsContent />}
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
        </div>
      </div>
    </div>
  );
};

export default UserProfile;