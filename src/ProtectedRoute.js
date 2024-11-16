import { useContext } from "react"
import { AuthContext } from "./App"
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const token = useContext(AuthContext);
    const location = useLocation();

    if (!token) {
       return <Navigate  to="/" replace state={{ from: location }} />
    } else {
        return children;
    }
}

export default ProtectedRoute;