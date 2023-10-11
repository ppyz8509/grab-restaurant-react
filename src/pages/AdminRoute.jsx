import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/signin" />;
  }
  if (!user.roles.includes("ROLES_ADMIN")) {
    return <Navigate to="/notallow" />;
  }
  return children;
};

export default AdminRoute;