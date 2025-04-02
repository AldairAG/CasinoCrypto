import OperationsContent from  "./OperationsContent";
import PaymentsContent from "./PaymentsContent";
import QuinelaContent from "./QuinelaContent";

interface HistoryContentProps {
  subTab: string;
}
//Menu para las secciuones de historial en el tabs
const HistoryContent: React.FC<HistoryContentProps> = ({ subTab }) => {
  switch (subTab) {
    case "operations":
      return <OperationsContent />;
    case "payment":
      return <PaymentsContent />;
    case "quinela":
      return <QuinelaContent />;
    default:
      return <OperationsContent />;
  }
};

export default HistoryContent;