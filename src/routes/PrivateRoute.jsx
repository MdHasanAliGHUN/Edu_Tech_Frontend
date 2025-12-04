import { Navigate, useLocation } from "react-router";
import useUserHook from "../hooks/useUserHook";

const PrivateRoute = ({ children }) => {
  const { user } = useUserHook();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
