import { useDispatch, useSelector } from "react-redux";
import { QuinielaPostType, QuinielaRequestType } from "../types/QinielaType";
import { carritoSelector } from "../Store/slices/carritoSlice";

export const useCarrito = () => {
    const dispatch = useDispatch();
    const items = useSelector(carritoSelector.items);
    const total = useSelector(carritoSelector.total);
    const cantidad = useSelector(carritoSelector.cantidad);

    const addItemToCart = (quiniela: QuinielaPostType) => {
        dispatch({ type: 'carrito/addItem', payload: quiniela });
        console.log("Item added to cart:", quiniela);
    };

    const updatePredictionInCart = (idQuiniela: number, updatedPrediction: Partial<QuinielaRequestType>) => {
        dispatch({ type: 'carrito/updatePrediction', payload: { idQuiniela, updatedPrediction } });
    };

    const removeItemFromCart = (idQuiniela: number) => {
        dispatch({ type: 'carrito/removeItem', payload: idQuiniela });
    };

    const clearCartItems = () => {
        dispatch({ type: 'carrito/clearCart' });
    };

    const isItemInCart = (idQuiniela: number) => {
        return items.some(item => item.idQuiniela === idQuiniela);
    };

    const getCartSummary = () => {
        return {
            totalItems: cantidad,
            totalAmount: total,
            items: items
        };
    };

    const checkout = async () => {
        try {
            // Aquí iría la lógica para procesar la compra
            // Por ejemplo, llamar a un servicio de API
            // const result = await carritoService.checkout(items);
            
            // Si la compra es exitosa, limpiar el carrito
            clearCartItems();
            return { success: true, message: "Compra realizada con éxito" };
        } catch (error) {
            console.error("Error al procesar la compra:", error);
            return { success: false, message: "Error al procesar la compra" };
        }
    };

    return {
        items,
        total,
        cantidad,
        addItemToCart,
        removeItemFromCart,
        clearCartItems,
        isItemInCart,
        getCartSummary,
        checkout,
        updatePredictionInCart,
    };
};