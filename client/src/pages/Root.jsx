import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Copyright from "../components/common/Copyright";
import defaultTheme from "../themes/defaultTheme";
import Login from "./auth/Login";

function Root() {
    const navigate = useNavigate();
    const { authData } = useSelector((state) => state.auth);
    const currentPath = window.location.pathname;
    const [render, setRender] = useState(<></>);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (!authData?.user || !authData?.token) {
            setRender(<Login />);
            setIsLogged(false);
        } else {
            setIsLogged(true);
            if (currentPath === "/") navigate("/patients");
            else setRender(<Outlet />);
        }
    }, [authData, navigate, currentPath]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main">
                <div>
                    {isLogged && <Header />}
                    {render}
                </div>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export default Root;
