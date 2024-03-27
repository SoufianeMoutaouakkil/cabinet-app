import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ConsultationEditUI from "./ConsultationEditUI";

const ConsultationEdit = ({ consultation, loading, onUpdate }) => {
    const [searchParams] = useSearchParams();
    const patientId = searchParams.get("patientId");



    const [isChanged, setIsChanged] = useState(false);
    const navigate = useNavigate();

    const onCancel = () => {
        if (consultation._id) {
            let url = `/consultations/${consultation._id}`;
            if (patientId) url += `?patientId=${patientId}`;
            navigate(url);
        } else {
            if (patientId) navigate(`/patients/${patientId}`);
            else navigate(`/consultations`);
        }
    };

    const onSave = (data) => {
        onUpdate(data);
    };


    return (
        <ConsultationEditUI consultation={consultation} loading={loading} onSave={onSave} />
    );
};

export default ConsultationEdit;
