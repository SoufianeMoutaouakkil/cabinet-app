import Root from "../pages/patients/Root";
import ConsultationsDetails from "../pages/consultations/ConsultationsDetails";
import ConsultationsNew from "../pages/consultations/ConsultationsNew";
import ConsultationsEdit from "../pages/consultations/ConsultationsEdit";
import ConsultationsList from "../pages/consultations/ConsultationsList";

export default {
    path: "/consultations",
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
            path: "new",
            element: <ConsultationsNew />,
        },
        {
            path: ":id/edit",
            element: <ConsultationsEdit />,
        },
    ],
};
