import { ShoppingCartIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useCarrito } from "../../hooks/useCarrito";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { USER_ROUTES } from "../../constants/ROUTERS";

const CarritoQuiniela = () => {
    const { items, total, cantidad, removeItemFromCart, clearCartItems, checkout } = useCarrito();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });
    const {navigateTo} = useUser();

    const handleRemoveItem = (idQuiniela: number) => {
        removeItemFromCart(idQuiniela);
    };

    const handleClearCart = () => {
        clearCartItems();
    };

    const handleCheckout = async () => {
        if (items.length === 0) {
            setMessage({ text: "El carrito está vacío", type: "error" });
            return;
        }

        setIsProcessing(true);
        try {
            const result = await checkout();
            if (result.success) {
                setMessage({ text: result.message, type: "success" });
                setTimeout(() => {
                    navigateTo("/dashboard");
                }, 2000);
            } else {
                setMessage({ text: result.message, type: "error" });
            }
        } catch (error) {
            setMessage({ text: "Error al procesar la compra", type: "error" });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <ShoppingCartIcon className="h-8 w-8 text-blue-500" />
                    Mi Carrito de Quinielas
                </h1>
                <div className="flex gap-4">
                    <button 
                        onClick={handleClearCart}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-1"
                    >
                        <TrashIcon className="h-5 w-5" />
                        Vaciar carrito
                    </button>
                    <button 
                        onClick={() => navigateTo(USER_ROUTES.QUINIELAS_LIST)}
                        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg flex items-center gap-1"
                    >
                        <PlusIcon className="h-5 w-5" />
                        Añadir más quinielas
                    </button>
                </div>
            </div>

            {message.text && (
                <div className={`mb-4 p-3 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {message.text}
                </div>
            )}

            {items?.length > 0 ? (
                <>
                    <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modo</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalles</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {items.map((item) => (
                                    <tr key={item.idQuiniela} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{item.nombreQuiniela || "Quiniela"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(item.fechaFin || Date.now()).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">${item.precioParticipacion}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.tipoApuesta}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button 
                                                onClick={() => navigateTo(`/quiniela/${item.idQuiniela}`)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                Ver apuestas
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button 
                                                onClick={() => handleRemoveItem(item.idQuiniela)}
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody> 
                        </table>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold">Total de artículos:</span>
                            <span>{cantidad}</span>
                        </div>
                        <div className="flex justify-between mb-6 text-lg font-bold">
                            <span>Total a pagar:</span>
                            <span>${total}</span>
                        </div>
                        <button 
                            onClick={handleCheckout}
                            disabled={isProcessing || items.length === 0}
                            className={`w-full py-3 rounded-lg ${isProcessing ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold`}
                        >
                            {isProcessing ? 'Procesando...' : 'Proceder al pago'}
                        </button>
                    </div>
                </>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow text-center">
                    <ShoppingCartIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
                    <p className="text-gray-500 mb-6">¡Añade algunas quinielas para empezar!</p>
                    <button 
                        onClick={() => navigateTo(USER_ROUTES.QUINIELAS_LIST)} 
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Ver Quinielas Disponibles
                    </button>
                </div>
            )}
        </section>
    );
}

export default CarritoQuiniela;