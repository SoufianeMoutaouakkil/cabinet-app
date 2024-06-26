import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./services/store";
import router from "./router/index";
import "./app.css";

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
