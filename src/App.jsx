import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Layouts from "./components/layout/Layouts";

function App() {
  const router = createBrowserRouter([
    // for login users
    {
      path: "/login",
      element: <Register />,
    },
    {
      path: "",
      element: <Layouts />,
      children: [
        // Dashboard sub-routes for authenticated users
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
      ],
    },

    // for  404 Not Found page
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
