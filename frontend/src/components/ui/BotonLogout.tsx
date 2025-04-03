import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";


const BotonLogout = () => {
    return (
        <button
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm border border-red-300 text-red-400
            hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out font-bold"
        >
            <ArrowRightEndOnRectangleIcon className="h-4 w-4"/>
            <span>Cerrar sesión</span>

        </button>
    )
}

export default BotonLogout
