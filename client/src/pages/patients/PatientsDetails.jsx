import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patientsGetById } from "../../services/store/slices/patientsSlice";
import { useEffect, useState } from "react";
import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsError from "../../components/patients/common/error/PatientsError";
import PatientDetails from "../../components/patients/details/PatientDetails";

const PatientsDetails = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const user = useSelector((state) => state.auth?.authData?.user);
    const patientById = useSelector((state) => state.patients?.getById);
    const dispatch = useDispatch();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPatientById();
    }, [dispatch, id]);

    useEffect(() => {
        if (patientById?.data) setPatient(patientById.data);
        else setPatient(null);

        if (patientById?.loading) setLoading(true);
        else setLoading(false);

        if (patientById?.error) setError(patientById.error);
        else setError(null);

        console.log(
            "PatientsDetails.jsx: useEffect: patientById: ",
            patientById
        );
    }, [patientById]);

    const getPatientById = () => {
        dispatch(patientsGetById({ id }));
    };

    const onEdit = (id) => {
        navigate(`/patients/${id}/edit`);
    };

    return (
        <div>
            <h1>Patient Details</h1>
            {loading && <PatientsLoading loading={loading && !patient} />}
            {error && <PatientsError error={error} />}
            {patient && (
                <PatientDetails user={user} patient={patient} onEdit={onEdit} />
            )}
        </div>
    );
};

export default PatientsDetails;
