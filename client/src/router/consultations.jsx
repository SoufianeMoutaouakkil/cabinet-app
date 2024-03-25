import Root from "../pages/patients/Root";
import ConsultationsDetails from "../pages/patients/ConsultationsDetails";
import ConsultationsNew from "../pages/patients/ConsultationsNew";
import ConsultationsEdit from "../pages/patients/ConsultationsEdit";
import ConsultationsList from "../pages/patients/ConsultationsList";

export default {
    path: "/patients",
    element: <Root />,
    children: [
        {
            path: "",
            index: true,
            element: <ConsultationsList />,
        },
        {
            path: ":id",
            element: <ConsultationsDetails />,
        },
        {
            path: "/:patientId/new",
            element: <ConsultationsNew />,
        },
        {
            path: ":id/edit",
            element: <ConsultationsEdit />,
        },
    ],
};
