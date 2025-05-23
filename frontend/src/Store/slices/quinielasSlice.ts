import { createSlice } from "@reduxjs/toolkit";
import { QuinielaType } from "../../types/QinielaType";

interface QuinielasState {
    quinielaList: QuinielaType[];
    quiniela: QuinielaType | null;
}

const initialState: QuinielasState = {
    quinielaList: [],
    quiniela: null
};

const quinielasSlice = createSlice({
    name: 'quiniela',
    initialState: initialState,
    reducers: {
        setQuinielasList: (state, action) => {
            state.quinielaList = action.payload;
        },
        setQuiniela: (state, action) => {
            state.quiniela = action.payload;
        },
    }
});

export const { setQuiniela,setQuinielasList} = quinielasSlice.actions;

export const quinielasSelector = {
    quiniela: (state:{quiniela:QuinielasState}) => state.quiniela.quiniela,
    quinielaList: (state:{quiniela:QuinielasState}) => state.quiniela.quinielaList,
}

export default quinielasSlice.reducer;