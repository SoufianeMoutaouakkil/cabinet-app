import { Button } from "@mui/material";

const LoginDemoCredentials = ({ setUsername, setPassword }) => {
    const handleLogin = (username, password) => {
        setUsername(username);
        setPassword(password);

    };

    const loginAsDoctor = () => {
        handleLogin("doctor", "password");
    };

    const loginAsAssistant = () => {
        handleLogin("assistant", "password");
    };

    const buttonContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    };

    return (
        <div style={buttonContainerStyle}>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={loginAsDoctor}
            >
                Login as Doctor
            </Button>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={loginAsAssistant}
            >
                Login as Assitant
            </Button>
        </div>
    );
};

export default LoginDemoCredentials;
