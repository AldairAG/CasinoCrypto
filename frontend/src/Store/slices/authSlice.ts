import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";
import { createSelector } from 'reselect';
import { getRolesFromToken } from "../../utils/decodeUtils";

interface AuthState {
    user: UserType | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
};

/**
 * @file authSlice.ts
 * @description This file defines the `authSlice` for managing authentication-related state in the application.
 * It uses Redux Toolkit's `createSlice` to handle user and token information.
 */

 /**
    * @constant authSlice
    * @description A Redux slice for managing authentication state.
    * Contains the following:
    * - `name`: The name of the slice, set to 'auth'.
    * - `initialState`: The initial state of the authentication slice.
    * - `reducers`: An object containing reducer functions to handle state updates.
    *
    * @property {Function} setUser - A reducer function to set the user and token in the state.
    *   @param {Object} state - The current state of the slice.
    *   @param {Object} action - The dispatched action containing the payload.
    *   @param {Object} action.payload - The payload containing user and token information.
    *   @param {Object} action.payload.user - The user object to set in the state.
    *   @param {string} action.payload.token - The authentication token to set in the state.
    *
    * @property {Function} clearUser - A reducer function to clear the user and token from the state.
    *   @param {Object} state - The current state of the slice.
    */
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});
export const { setUser, clearUser } = authSlice.actions;

const selectUserRoles = createSelector(
    [(state: { auth: AuthState }) => state.auth.token],
    (token) => token ? getRolesFromToken(token) : []
);

export const userSelector = {
    user: (state: { auth: AuthState }) => state.auth.user,
    token: selectUserRoles
}


export default authSlice.reducer;