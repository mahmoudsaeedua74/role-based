import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    // for login users
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
