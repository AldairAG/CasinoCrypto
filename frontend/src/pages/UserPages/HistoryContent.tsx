import CasinoContent from  "./CasinoContent";
import ApuestasContent from "./ApuestasContent";
import QuinelaContent from "./QuinelaContent";

interface HistoryContentProps {
  subTab: string;
}
//Menu para las secciuones de historial en el tabs
const HistoryContent: React.FC<HistoryContentProps> = ({ subTab }) => {
  switch (subTab) {
    case "casino":
      return <CasinoContent />;
    case "apuesta":
      return <ApuestasContent />;
    case "quinela":
      return <QuinelaContent />;
    default:
      return <CasinoContent />;
  }
};

export default HistoryContent;