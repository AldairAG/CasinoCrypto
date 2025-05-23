import { createSlice } from "@reduxjs/toolkit";
import { QuinielaPostType, QuinielaRequestType } from "../../types/QinielaType";

interface CarritoState {
    items: QuinielaPostType[];
    total: number;
    cantidad: number;
}

const initialState: CarritoState = {
    items: [],
    total: 0,
    cantidad: 0
};

const carritoSlice = createSlice({
    name: 'carrito',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.items.push({...newItem, cantidad: 1});
            
            state.cantidad += 1;
            state.total += newItem.precio;
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            const itemToRemove = state.items.find(item => item.idQuiniela === idToRemove);
            
            if (itemToRemove) {
                state.total -= itemToRemove.precioParticipacion;
                state.cantidad -= 1;
                state.items = state.items.filter(item => item.idQuiniela !== idToRemove);
            }
        },
        updateItem: (state, action) => {
            const { idQuiniela, updatedFields } = action.payload;
            const itemIndex = state.items.findIndex(item => item.idQuiniela === idQuiniela);
            if (itemIndex !== -1) {
                // Ajustar el total si el precio cambia
                const oldPrecio = state.items[itemIndex].precioParticipacion ?? state.items[itemIndex].precioParticipacion;
                const newPrecio = updatedFields.precioParticipacion ?? updatedFields.precio ?? oldPrecio;
                state.total += newPrecio - oldPrecio;
                state.items[itemIndex] = {
                    ...state.items[itemIndex],
                    ...updatedFields
                };
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            state.cantidad = 0;
        },
    }
});

export const { addItem, removeItem, clearCart,updateItem } = carritoSlice.actions;

export const carritoSelector = {
    items: (state: { carrito: CarritoState }) => state.carrito.items,
    total: (state: { carrito: CarritoState }) => state.carrito.total,
    cantidad: (state: { carrito: CarritoState }) => state.carrito.cantidad
};

export default carritoSlice.reducer;