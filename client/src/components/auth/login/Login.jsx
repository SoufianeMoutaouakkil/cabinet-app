import LoginUI from "./LoginUI";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Login = ({ loginAction }) => {
  const [errorText, setErrorText] = useState("");
  const { authData, isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authData?.user) {
      navigate("/");
    }
  }, [authData, navigate]);

  useEffect(() => {
    if (error) {
      setErrorText(error);
    }
  }, [error]);

  const handleLogin = async (username, password) => {
    console.log("Login.jsx: handleLogin: username: ", username);
    console.log("Login.jsx: handleLogin: password: ", password);
    try {
      await dispatch(loginAction({ username, password }));
      navigate("/");
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
