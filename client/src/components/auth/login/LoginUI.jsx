import { useState } from "react";
import LoginDemoCredentials from "./LoginDemoCredentials";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toast from "../../common/dialog/Toast";
import "./login.css";

const LoginUI = ({ handleLogin, errorText, isLoading }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-container">
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className="logo">
                    <img src="/assets/logo-med.png" alt="logo" />
                </div>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box
                    component="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(username, password);
                    }}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => {
                            handleLogin(username, password);
                        }}
                        disabled={!username || !password || isLoading}
                    >
                        login
                    </Button>
                </Box>
            </Box>
            {errorText && <Toast type="error" message={errorText} />}
            <LoginDemoCredentials
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </div>
    );
};

export default LoginUI;
