import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Unauthorized from "../pages/auth/Unauthorized";
const routePermissions = {
  "/users": "view_users",
  "/reports": "view_reports",
  "/settings": "view_settings",
  "/team": "view_team",
  "/profile": "view_profile",
  "/tasks": "view_tasks",
};

//Protected Routes  based on authentication and permissions
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));

  // if user try to go to any route without login he will back to login page
  if (!user) return <Navigate to="/login" />;

  const requiredPermission = routePermissions[location.pathname];
  // if user try to go to another routes and he doesn't have the permission
  // will show unauthorized he  doesn't have  access to see this routes
  if (requiredPermission && !user.permissions?.includes(requiredPermission)) {
    return <Unauthorized />;
  }

  // If user is authenticated and authorized, render the child route
  return children;
};

export default ProtectedRoute;
