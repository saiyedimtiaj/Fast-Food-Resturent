import { useContext } from "react";
import { AuthProvider } from "../Provider/AuthContext";


const useAuth = () => {
    const authUtility = useContext(AuthProvider)
    return authUtility
};

export default useAuth;