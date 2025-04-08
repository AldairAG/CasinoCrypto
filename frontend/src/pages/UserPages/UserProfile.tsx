import ProfileContent from "./ProfileContent";
import HistoryApuestasContent from "./HistoryApuestasContent";
import FAQContent from "./FAQContent";
import SupportContent from "./SupportContent";
import TransactionsContent from "./TransactionsContent";
import MainDiv from "../../components/ui/MainDiv";
import { Sidebar, SidebarContent, SidebarItem, SidebarList } from "../../components/navigation/SiderBar";
import { WalletIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import WalletManager from "../../components/forms/WalletManager";

const UserProfile: React.FC = () => {

  return (
    <MainDiv className="h-[calc(100vh-150px)] p-4">

      <Sidebar defaultValue="perfil" className="bg-gray-100 space-x-6 w-full">

        <SidebarList className="w-1/4 sm:w-1/5 max-h-1/2">
          <SidebarItem className="flex gap-2 items-center" value="perfil">
            <UserIcon className="h-5 w-5" />
            Perfil
          </SidebarItem>
          <SidebarItem className="flex gap-2 items-center" value="wallets">
            <WalletIcon className="h-5 w-5" />
            Manejo de wallets
          </SidebarItem>
          <SidebarItem className="flex gap-2 items-center" value="apuestas">
          <CurrencyDollarIcon className="h-5 w-5" />
            Apuestas
          </SidebarItem>
          <SidebarItem className="flex gap-2 items-center" value="transacciones">
          <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            Transacciones
          </SidebarItem>
          <SidebarItem className="flex gap-2 items-center" value="faq">
          <QuestionMarkCircleIcon className="h-5 w-5" />
            Preguntas frecuentes
          </SidebarItem>
          <SidebarItem className="flex gap-2 items-center" value="soporte">
          <ChatBubbleOvalLeftEllipsisIcon  className="h-5 w-5" />
            Soporte
          </SidebarItem>
        </SidebarList>

        <SidebarContent value="perfil" className="w-full h-full">
          <ProfileContent />
        </SidebarContent>

        <SidebarContent value="wallets">
          <WalletManager/>
        </SidebarContent>

        <SidebarContent value="transacciones" className="w-full">
          <TransactionsContent />
        </SidebarContent>

        <SidebarContent value="apuestas" className="w-full">
          <HistoryApuestasContent />
        </SidebarContent>

        <SidebarContent value="faq" className="w-full">
          <FAQContent />
        </SidebarContent>

        <SidebarContent value="soporte" className="w-full">
          <SupportContent />
        </SidebarContent>

      </Sidebar>

    </MainDiv>
  );
};

export default UserProfile;