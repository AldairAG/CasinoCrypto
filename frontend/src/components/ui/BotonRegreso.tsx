import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface BotonRegresoProps {
    label:string,
    to:string
}

const BotonRegreso:React.FC<BotonRegresoProps> = ({label,to}) => {
    return (
        <Link to={to} className="flex justify-between items-center gap-4 w-55">
            <ArrowLongLeftIcon className="h-6 w-6 text-gray-500" />
            <label>{label}</label>
        </Link>
    )
}

export default BotonRegreso