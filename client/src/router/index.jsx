import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import authRouter from "./auth";
import patientsRouter from "./patients";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Root />,
        children: [authRouter, patientsRouter],
    },
]);

export default router;
