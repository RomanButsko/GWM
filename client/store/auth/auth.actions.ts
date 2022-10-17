import { toastr } from "react-redux-toastr";
import { IUserLogin, IUserRegister } from "./auth.interface";
import { IUser } from "./../../types/user.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastrError } from "../../utils/api.utils";
import { AuthService } from "../../services/auth/auth.service";

export const registerUser = createAsyncThunk<IUser, IUserRegister>(
    "auth/register",
    async (
        { email, password, city, gender, date, name, surname },
        thunkApi
    ) => {
        try {
            const response = await AuthService.register(
                email,
                password,
                city,
                gender,
                date,
                name,
                surname
            );
            toastr.success("Регистрация", "прошла успешно");
            return response;
        } catch (e) {
            toastrError(e);
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const login = createAsyncThunk<IUser, IUserLogin>(
    "auth/login",
    async ({ email, password }, thunkApi) => {
        try {
            const response = await AuthService.login(email, password);
            toastr.success("Вход", "выполнен");
            return response;
        } catch (e) {
            toastrError(e);
            return thunkApi.rejectWithValue(e);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    return {};
});
