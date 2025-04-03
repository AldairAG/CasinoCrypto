// components/ui/Icon.tsx
// Este componete lo cree para utilizar el otro dentro del content de support porquye no me dejaba importar el icono de soporte directamente desde el componente de icons
import { icons, IconName } from "../../components/ui/Icons";
interface IconProps {
  name: IconName;
  className?: string;
}

const Icon = ({ name, className = "" }: IconProps) => {
  const IconComponent = icons[name];
  
  return (
    <span className={`inline-block ${className}`}>
      {IconComponent}
    </span>
  );
};

export default Icon;