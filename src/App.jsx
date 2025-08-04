import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";
import Layouts from "./components/layout/Layouts";
import ProtectedRoute from "./guards/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy, Suspense } from "react";
import Loader from "./components/ui/Loader";
const Profile = lazy(() => import("./pages/Profile"));
const Users = lazy(() => import("./pages/Users"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Team = lazy(() => import("./pages/Team"));
function App() {
  const router = createBrowserRouter([
    // for login users
    {
      path: "/login",
      element: <Register />,
    },
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Layouts />
        </ProtectedRoute>
      ),
      children: [
        // Dashboard sub-routes for authenticated users
        {
          path: "users",
          element: (
            <Suspense fallback={<Loader />}>
              <Users />
            </Suspense>
          ),
        },
        {
          path: "reports",
          element: (
            <Suspense fallback={<Loader />}>
              <Reports />
            </Suspense>
          ),
        },
        {
          path: "settings",
          element: (
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          ),
        },
        {
          path: "team",
          element: (
            <Suspense fallback={<Loader />}>
              <Team />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "tasks",
          element: (
            <Suspense fallback={<Loader />}>
              <Tasks />
            </Suspense>
          ),
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
