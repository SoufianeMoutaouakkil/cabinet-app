import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsError from "../../components/patients/common/error/PatientsError";

import {
    patientsUpdate,
    patientsGetById,
} from "../../services/store/slices/patientsSlice";
import PatientsEditComponent from "../../components/patients/edit/PatientsEdit";
import Toast from "../../components/common/actions/Toast";

const PatientsEdit = () => {
    const id = useParams().id;
    const role = useSelector((state) => state.auth?.authData?.user?.role);
    const patientById = useSelector((state) => state.patients?.getById);
    const patientUpdateState = useSelector((state) => state.patients?.update);
    const dispatch = useDispatch();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [alert, setAlert] = useState(null);

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
        console.log("patientUpdateState test : ", patientUpdateState);
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
        dispatch(patientsUpdate({ id, data, cb: afterUpdate }));
    };

    const afterUpdate = () => {
        setAlert(<Toast message="Patient updated successfully" />);
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    };

    return (
        <div>
            {loading && <PatientsLoading loading={loading && !patient} />}
            {error && <PatientsError error={error} />}
            {patient && (
                <PatientsEditComponent
                    patient={patient}
                    onUpdate={onUpdate}
                    loading={loading}
                    role={role}
                />
            )}
            {alert}
        </div>
    );
};

export default PatientsEdit;
