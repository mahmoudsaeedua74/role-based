import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    // for login users
    {
      path: "/login",
      element: <Register />,
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
