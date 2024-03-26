import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { patientsCreate } from "../../services/store/slices/patientsSlice";
import PatientsError from "../../components/patients/common/error/PatientsError";
import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsNewComponent from "../../components/patients/new/PatientsNew";

const PatientsNew = () => {
    const patient = useSelector((state) => state.patients?.create);
    const dispatch = useDispatch();

    const createPatient = (data) => {
        dispatch(patientsCreate({data}));
    };

    return (
        <div>
            <PatientsLoading loading={patient?.loading} />
            <PatientsError error={patient?.error} />
            <PatientsNewComponent createPatient={createPatient} />
        </div>
    );
};

export default PatientsNew;
