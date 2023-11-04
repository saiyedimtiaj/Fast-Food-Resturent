import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location.pathname);
    console.log(location);
    const {user} = useAuth()
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
    
};

export default PrivateRoute;