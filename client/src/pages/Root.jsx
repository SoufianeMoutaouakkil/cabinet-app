import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";

function Root() {
    const navigate = useNavigate();
    const { authData } = useSelector((state) => state.auth);
    const currentPath = window.location.pathname;
    const [render, setRender] = useState(<></>);

    useEffect(() => {
        if (
            (!authData?.user || !authData?.token) &&
            !currentPath.includes("/login") &&
            !currentPath.includes("/register")
        ) {
            navigate(`/auth/login`);
        } else {
            setRender(<Outlet />);
        }
    }, [authData, navigate, currentPath]);

    return (
        <div>
            <Header />
            {render}
        </div>
    );
}

export default Root;
