// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Tabs from "./Tabs";
// import ProfileContent from "./ProfileContent";
// import DashboardContent from "./IdentificationContent";
// import PasswordContent from "./PasswordContent";
// import VerificationContent from "./VerificationContent";
// import HistoryTabs from "./HistoryTabs";
// import OperationsContent from "../UserPages/OperationsContent";
// import PaymentsContent from "../UserPages/PaymentsContent";
// import QuinelaContent from "../UserPages/QuinelaContent";
// import FAQContent from "./FAQContent";
// import SupportContent from "./SupportContent";

// const UserProfile: React.FC = () => {
//   const [activeMainTab, setActiveMainTab] = useState<string>("profile");
//   const [activeHistoryTab, setActiveHistoryTab] = useState<string>("operations");

//   // Secciones donde NO mostrar las tabs principales
//   const sectionsWithoutMainTabs = ["history", "faq", "support"];

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen w-full max-w-[1600px] gap-4 p-4 bg-gray-100 dark:bg-gray-900">
//       <Sidebar activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
      
//       <div className="flex-1 flex flex-col h-full">
//         {/* Mostrar tabs principales solo cuando NO estemos en las secciones definidas */}
//         {!sectionsWithoutMainTabs.includes(activeMainTab) && (
//           <Tabs activeTab={activeMainTab} setActiveTab={setActiveMainTab} />
//         )}
        
//         <div className="flex-1 mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-auto">
//           {activeMainTab === "profile" && <ProfileContent />}
          
//           {activeMainTab === "history" && (
//             <>
//               <HistoryTabs 
//                 activeSubTab={activeHistoryTab} 
//                 setActiveSubTab={setActiveHistoryTab} 
//               />
//               <div className="mt-4">
//                 {/* Recuerda cambiar estas secciones aparte de las del tab cuando quieras agregar las otras nuevas secciones , de momento de la quinela funciona bien puedes ocuparla de ejmeplo*/}
//                 {activeHistoryTab === "operations2" && <OperationsContent />}
//                 {activeHistoryTab === "payments" && <PaymentsContent />}
//                 {activeHistoryTab === "quinela" && <QuinelaContent />}
//               </div>
//             </>
//           )}
          
//           {activeMainTab === "dashboard" && <DashboardContent />}
//           {activeMainTab === "verification" && <VerificationContent />}
//           {activeMainTab === "password" && <PasswordContent />}
          
//           {activeMainTab === "faq" && (
//             <FAQContent 
//               onNavigateToSupport={() => setActiveMainTab("support")} 
//             />
//           )}
          
//           {activeMainTab === "support" && <SupportContent />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import { useState } from "react";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import ProfileContent from "./ProfileContent";
import DashboardContent from "./IdentificationContent";
import PasswordContent from "./PasswordContent";
import VerificationContent from "./VerificationContent";
import HistoryTabs from "./HistoryTabs";
import OperationsContent from "../UserPages/OperationsContent";
import PaymentsContent from "../UserPages/PaymentsContent";
import QuinelaContent from "../UserPages/QuinelaContent";
import FAQContent from "./FAQContent";
import SupportContent from "./SupportContent";

const UserProfile: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>("profile");
  const [activeHistoryTab, setActiveHistoryTab] = useState<string>("operations");

  // Secciones donde NO mostrar las tabs principales
  const sectionsWithoutMainTabs = ["history", "faq", "support"];

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
          
          {activeMainTab === "history" && (
            <>
              <HistoryTabs 
                activeSubTab={activeHistoryTab} 
                setActiveSubTab={setActiveHistoryTab} 
              />
              <div className="mt-4">
                {activeHistoryTab === "operations" && <OperationsContent />}
                {activeHistoryTab === "payment" && <PaymentsContent />}
                {activeHistoryTab === "quinela" && <QuinelaContent />}
              </div>
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