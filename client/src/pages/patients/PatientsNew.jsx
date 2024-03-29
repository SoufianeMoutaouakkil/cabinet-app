import { useDispatch, useSelector } from "react-redux";
import { patientsCreate } from "../../services/store/slices/patientsSlice";
import PatientsError from "../../components/patients/common/error/PatientsError";
import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsNewComponent from "../../components/patients/new/PatientsNew";
import Toast from "../../components/common/dialog/Toast";
import { useState } from "react";
import { useNavigate } from "react-router";

const PatientsNew = () => {
    const navigate = useNavigate();
    const patient = useSelector((state) => state.patients?.create);
    const role = useSelector((state) => state.auth?.authData?.user?.role);
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(null);
    const [isCreated, setIsCreated] = useState(false);

    const createPatient = (data) => {
        dispatch(patientsCreate({ data, cb: afterCreate }));
    };

    const afterCreate = (res) => {
        const newId = res.data._id;
        setAlert(<Toast message="Patient created successfully" />);
        setIsCreated(true);
        setTimeout(() => {
            setAlert(null);
            if (newId) navigate(`/patients/${newId}`);
            else navigate(`/patients`);
        }, 3000);
    };

    return (
        <div>
            <PatientsLoading loading={patient?.loading} />
            <PatientsError error={patient?.error} />
            <PatientsNewComponent
                createPatient={createPatient}
                loading={patient?.loading}
                isCreated={isCreated}
                role={role}
            />
            {alert}
        </div>
    );
};

export default PatientsNew;
