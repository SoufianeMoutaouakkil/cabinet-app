import { Outlet } from "react-router-dom";

const Patients = () => {
    return (
        <div>
            <h1>Patients</h1>
            <Outlet />
        </div>
    );
};

export default Patients;
