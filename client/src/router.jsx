// auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// home pages
import Home from "./pages/Home";

// error page
import Error from "./pages/error/Error";

// import create browser router
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
