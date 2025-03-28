import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";
import { ProfileContent } from "./ProfileContent";
import { DashboardContent } from "./DashboardContent";
import { PasswordContent } from "./PasswordContent";
import { VerificationContent } from "./VerificationContent";

export const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");

  return (
    <div className="flex flex-col md:flex-row h-full w-full max-w-[1600px] gap-4 p-4 bg-gray-100 dark:bg-gray-900 flex-1/3">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "verification" && <VerificationContent />}
          {activeTab === "password" && <PasswordContent />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 