import { rootAction } from "./../store/root-action";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(rootAction, dispatch);
};
