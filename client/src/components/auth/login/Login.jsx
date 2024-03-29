import LoginUI from "./LoginUI";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Login = ({ loginAction }) => {
    const [errorText, setErrorText] = useState("");
    const { isLoading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            setErrorText(error);
        }
    }, [error]);

    const handleLogin = async (username, password) => {
        try {
            await dispatch(loginAction({ username, password }));
            navigate("/patients");
        } catch (err) {
            setErrorText(err.message);
        }
    };

    return (
        <LoginUI
            handleLogin={handleLogin}
            errorText={errorText}
            isLoading={isLoading}
        />
    );
};

export default Login;
