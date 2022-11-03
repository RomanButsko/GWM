import { initialState } from "./auth.interface";
import { registerUser, login, logout } from "./auth.actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialState = {
    isLoading: false,
    user: null,
    error: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, _) => {
            state.isLoading = true;
        }),
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            }),
            builder.addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
        builder.addCase(login.pending, (state, _) => {
            state.isLoading = true;
        }),
            builder.addCase(login.fulfilled, (state, action) => {
                console.log(action.payload);
                state.isLoading = false;
                state.user = action.payload;
            }),
            builder.addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
        builder.addCase(logout.pending, (state, _) => {
            state.isLoading = true;
        }),
            builder.addCase(logout.fulfilled, (state, _) => {
                state.isLoading = false;
                state.user = null;
            }),
            builder.addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const selectCount = (state: initialState) => state;

export default authSlice.reducer;
