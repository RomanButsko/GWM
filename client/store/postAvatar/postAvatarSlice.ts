import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IAvatarPath {
    path: string;
    success: boolean;
}

const initialState: IAvatarPath = {
    path: "",
    success: false,
};

export const postAvatarSlice = createSlice({
    name: "postAvatar",
    initialState,
    reducers: {
        sendAvatar: (state, action: PayloadAction<string>) => {
            state.path = action.payload;
            state.success = true;
        },
        clearBckg: (state) => {
            state.path = "";
            state.success = false;
        },
    },
});

export const { sendAvatar, clearBckg } = postAvatarSlice.actions;

export const getPostAvatarPath = (state: IAvatarPath) => state;

export default postAvatarSlice.reducer;
