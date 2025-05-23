import { createSlice } from '@reduxjs/toolkit';
import { Event } from '../../types/Event';

interface DeportesState {
    ligas: { id: number; name: string }[];
    deportes: { id: number; name: string }[];
    eventos: Event[];
    evento: Event;
}

const initialState: DeportesState = {
    ligas: [],
    deportes: [],
    eventos: [],
    evento: {} as Event,
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
        setEvento: (state, action) => {
            state.evento = action.payload;
        },
        clearEventos: (state) => {
            state.eventos = [];
        },
        clearEvento: (state) => {
            state.evento = {} as Event;
        },
    }
});

export const { setLigas, setDeportes, setEventos,setEvento,clearEvento,clearEventos } = citaSlice.actions;

export const deportesSelector = {
    ligas: (state: { deportes: DeportesState }) => state.deportes.ligas,
    deportes: (state: { deportes: DeportesState }) => state.deportes.deportes,
    eventos: (state: { deportes: DeportesState }) => state.deportes.eventos,
    evento: (state: { deportes: DeportesState }) => state.deportes.evento,
}

export default citaSlice.reducer;
