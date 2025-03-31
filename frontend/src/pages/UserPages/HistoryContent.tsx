import OperationsContent from  "./OperationsContent";
import PaymentsContent from "./PaymentsContent";
import MovementsContent from "./MovementsContent";

interface HistoryContentProps {
  subTab: string;
}

const HistoryContent: React.FC<HistoryContentProps> = ({ subTab }) => {
  switch (subTab) {
    case "operations":
      return <OperationsContent />;
    case "payments":
      return <PaymentsContent />;
    case "movements":
      return <MovementsContent />;
    default:
      return <OperationsContent />;
  }
};

export default HistoryContent;