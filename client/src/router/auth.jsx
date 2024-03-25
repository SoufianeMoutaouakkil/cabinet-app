import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export default {
    path: "/auth",
    element: <Auth />,
    children: [
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "register",
            element: <Register />,
        },
    ],
};
