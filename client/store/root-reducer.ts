import { authSlice } from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { reducer as toastrReducer } from "react-redux-toastr";
import { api } from "./api/api";

export const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
    tostr: toastrReducer,
});
