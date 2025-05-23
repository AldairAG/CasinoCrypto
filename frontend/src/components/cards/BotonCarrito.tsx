import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { USER_ROUTES } from "../../constants/ROUTERS";
import { useCarrito } from "../../hooks/useCarrito";


const BotonCarrito = () => {
    const {items}=useCarrito();
    return (
        <Link to={USER_ROUTES.CARRITO} className="border border-gray-300 rounded-sm flex items-center py-2 px-3 gap-3 hover:bg-gray-200 transition">
            <ShoppingCartIcon className="h-5 w-5 text-gray-500" />
            <h3>Mi cesta</h3>
            <h3 className="font-semibold bg-gray-300 rounded-2xl px-3">{items.length}</h3>
        </Link>
    )
}

export default BotonCarrito