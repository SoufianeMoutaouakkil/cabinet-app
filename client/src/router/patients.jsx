import Patients from "../pages/patients/Patients";
import PatientsDetails from "../pages/patients/PatientsDetails";
import PatientsNew from "../pages/patients/PatientsNew";
import PatientsEdit from "../pages/patients/PatientsEdit";

export default {
    path: "/patients",
    element: <Patients />,
    children: [
        {
            path: ":id",
            element: <PatientsDetails />,
        },
        {
            path: "new",
            element: <PatientsNew />,
        },
        {
            path: ":id/edit",
            element: <PatientsEdit />,
        },
    ],
};
