import { useAppSelector } from "./useSelector";

const useAuth = () => useAppSelector((state) => state.auth);

export default useAuth;
