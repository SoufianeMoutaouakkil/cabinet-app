import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Consultations = () => {
    const role = useSelector((state) => state.auth?.authData?.user?.role);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`role: ${role}`);
        if (role !== "dr") {
            navigate("/patients");
        }
    }, [navigate, role]);

    return (
        <div>
            <h1>Consultations</h1>
            <Outlet />
        </div>
    );
};

export default Consultations;
