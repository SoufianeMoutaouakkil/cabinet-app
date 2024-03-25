import Root from "../pages/patients/Root";
import PatientsDetails from "../pages/patients/PatientsDetails";
import PatientsNew from "../pages/patients/PatientsNew";
import PatientsEdit from "../pages/patients/PatientsEdit";
import PatientsList from "../pages/patients/PatientsList";

export default {
    path: "/patients",
    element: <Root />,
    children: [
        {
            path: "",
            index: true,
            element: <PatientsList />,
        },
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
