import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../context";


export const RequireAuth = ({ children }) => {
    const location = useLocation();

    const { user } = useAuth();
    return user ? children : <Navigate to={'/login'} state={{ from: location?.from }} replace />
}