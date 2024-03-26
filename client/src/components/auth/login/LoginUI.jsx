import { useState } from "react";

const LoginUI = ({ handleLogin, errorText }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"} Password
            </button>
            <button
                onClick={() => {
                    handleLogin(username, password);
                }}
            >
                Login
            </button>
            {errorText && <p>{errorText}</p>}
        </div>
    );
};

export default LoginUI;
