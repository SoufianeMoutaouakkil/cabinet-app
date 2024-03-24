import { login } from "../../services/store/slices/authSlice";
import LoginComponent from "../../components/auth/login/Login";

const Login = () => {
    return (
        <LoginComponent loginAction={login} />
    );
}

export default Login;
