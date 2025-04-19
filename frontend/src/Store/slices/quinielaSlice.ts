import { createSlice } from "@reduxjs/toolkit";
import { QuinielaType } from "../../types/QuinielaType";

interface QuinielaState {
    quiniela: QuinielaType | null;
    quinielasList: QuinielaType[] | null;
}

const initialState: QuinielaState = {
    quinielasList: null,
    quiniela: null,
};

const quinielaSlice = createSlice({
    name: 'quiniela',
    initialState,
    reducers: {
        setQuinielasList: (state, action) => {
            state.quinielasList = action.payload;
        },
        setQuiniela: (state, action) => {
            state.quiniela = action.payload;
        },
        clearQuiniela: (state) => {
            state.quiniela = null;
        },
    },
});
export const { setQuiniela, clearQuiniela,setQuinielasList } = quinielaSlice.actions;

export const quinielaSelector = {
    quiniela: (state: { quiniela: QuinielaState }) => state.quiniela.quiniela,
    quinielasList: (state: { quiniela: QuinielaState }) => state.quiniela.quinielasList,
}

export default quinielaSlice.reducer;
