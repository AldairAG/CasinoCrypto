// components/TransactionsContent.tsx
import IngresoContent from "./IngresoContent";
import RetiroContent from "./RetiroContent";
import GananciaContent from "./GananciaContent";

interface TransactionsContentProps {
  subTab: string;
}

const TransactionsContent: React.FC<TransactionsContentProps> = ({ subTab }) => {
  switch (subTab) {
    case "ingreso":
      return <IngresoContent />;
    case "retiro":
      return <RetiroContent />;
    case "ganancia":
      return <GananciaContent />;
    default:
      return <IngresoContent />;
  }
};

export default TransactionsContent;