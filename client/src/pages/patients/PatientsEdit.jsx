import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsError from "../../components/patients/common/error/PatientsError";
import PatientDetails from "../../components/patients/edit/PatientEdit";

import {
    patientsUpdate,
    patientsGetById,
} from "../../services/store/slices/patientsSlice";
import PatientEdit from "../../components/patients/edit/PatientEdit";

const PatientsDetails = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const user = useSelector((state) => state.auth?.authData?.user);
    const patientById = useSelector((state) => state.patients?.getById);
    const patientUpdateState = useSelector((state) => state.patients?.update);
    const dispatch = useDispatch();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        dispatch(patientsGetById({ id }));
    }, [dispatch, id]);

    useEffect(() => {
        if (patientById?.data) setPatient(patientById.data);
        else setPatient(null);

        if (patientById?.loading) setLoading(true);
        else setLoading(false);

        if (patientById?.error) setError(patientById.error);
        else setError(null);

    }, [patientById]);

    useEffect(() => {
        // if (patientUpdateState?.data) {
        //     navigate(`/patients/${id}`);
        // }

        if (patientUpdateState?.error) {
            setError(patientUpdateState.error);
        }

        if (patientUpdateState?.loading) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [patientUpdateState]);

    const onUpdate = (data) => {
        dispatch(patientsUpdate({ id, data }));
    };

    return (
        <div>
            <h1>Patient Details</h1>
            {loading && <PatientsLoading loading={loading && !patient} />}
            {error && <PatientsError error={error} />}
            {patient && (
                <PatientEdit
                    patient={patient}
                    onUpdate={onUpdate}
                    loading={loading}
                />
            )}
        </div>
    );
};

export default PatientsDetails;
