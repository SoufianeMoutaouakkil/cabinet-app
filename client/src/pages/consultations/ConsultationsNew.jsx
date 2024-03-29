import { useDispatch, useSelector } from "react-redux";
import { consultationsCreate } from "../../services/store/slices/consultationsSlice";
import ConsultationsError from "../../components/consultations/common/error/ConsultationsError";
import ConsultationsLoading from "../../components/consultations/common/loading/ConsultationsLoading";
import ConsultationsNewComponent from "../../components/consultations/new/ConsultationsNew";
import { useState } from "react";
import { useNavigate } from "react-router";
import Toast from "../../components/common/dialog/Toast";

const ConsultationsNew = () => {
    const consultation = useSelector((state) => state.consultations?.create);
    const [isCreated, setIsCreated] = useState(false);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onCreate = (data) => {
        dispatch(consultationsCreate({ data, cb: afterCreate }));
    };

    const afterCreate = (res) => {
        setIsCreated(true);
        setAlert(<Toast message="Consultation created successfully" />);
        setTimeout(() => {
            if (res.data._id)
                navigate(
                    `/consultations/${res.data._id}?patientId=${res.data.patient}`
                );
            else navigate(`/consultations`);
            setAlert(null);
        }, 3000);
    };

    return (
        <div>
            <ConsultationsLoading loading={consultation?.loading} />
            <ConsultationsError error={consultation?.error} />
            <ConsultationsNewComponent
                onCreate={onCreate}
                loading={consultation?.loading}
                isCreated={isCreated}
            />
            {alert}
        </div>
    );
};

export default ConsultationsNew;
