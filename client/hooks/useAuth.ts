import { TypeRootState } from "./../store/store";
import React from "react";
import { IUserAuth } from "../types/user.types";
import { useAppSelector } from "./useSelector";

const useAuth = () => useAppSelector((state) => state.auth);

export default useAuth;
