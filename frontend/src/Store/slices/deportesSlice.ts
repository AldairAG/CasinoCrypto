import { createSlice } from '@reduxjs/toolkit';
import { Event } from '../../types/Event';

interface DeportesState {
    ligas: { id: number; name: string }[];
    deportes: { id: number; name: string }[];
    eventos: Event[];
}

const initialState: DeportesState = {
    ligas: [],
    deportes: [],
    eventos: [],
}

const citaSlice = createSlice({
    name: 'deportes',
    initialState,
    reducers: {
        setLigas: (state, action) => {
            state.ligas = action.payload;
        },
        setDeportes: (state, action) => {
            state.deportes = action.payload;
        },
        setEventos: (state, action) => {
            state.eventos = action.payload;
        },
    }
});

export const { setLigas, setDeportes, setEventos } = citaSlice.actions;

export const deportesSelector = {
    ligas: (state: { deportes: DeportesState }) => state.deportes.ligas,
    deportes: (state: { deportes: DeportesState }) => state.deportes.deportes,
    eventos: (state: { deportes: DeportesState }) => state.deportes.eventos,
}

export default citaSlice.reducer;
