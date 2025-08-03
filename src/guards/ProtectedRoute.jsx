import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
    return (
      <div className="mt-10 text-red-500 text-lg min-h-screen gap-4 flex flex-col items-center justify-center text-center px-4">
        <p className="text-gray-700">Sorry you do not have Access Here</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex items-center justify-center gap-2 py-2 px-6 rounded-md font-medium transition duration-200 border border-primary bg-primary text-white hover:bg-white hover:text-black"
        >
          <AiOutlineArrowLeft />
          Back to Login
        </button>
      </div>
    );
  }

  // If user is authenticated and authorized, render the child route
  return children;
};

export default ProtectedRoute;
