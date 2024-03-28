import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    patientsGetById,
    patientsRemove,
} from "../../services/store/slices/patientsSlice";
import { useEffect, useState } from "react";
import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsError from "../../components/patients/common/error/PatientsError";
import PatientDetails from "../../components/patients/details/PatientDetails";
import ConsultationsList from "../../components/consultations/list/ConsultationsList";
import ConsultationsListHeader from "../../components/consultations/list/ConsultationsListHeader";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import BackButton from "../../components/common/form/BackButton";
import Toast from "../../components/common/actions/Toast";
import ConfirmDialog from "../../components/common/actions/Confirm";

const PatientsDetails = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const role = useSelector((state) => state.auth?.authData?.user?.role);
    const patientById = useSelector((state) => state.patients?.getById);
    const dispatch = useDispatch();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
    const [alert, setAlert] = useState(null);
    const [open, setOpen] = useState(false);

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
    }, [patientById]);

    const getPatientById = () => {
        dispatch(patientsGetById({ id }));
    };

    const onEdit = () => {
        navigate(`/patients/${id}/edit`);
    };
    const onAddConsultation = () => {
        navigate(`/consultations/new?patientId=${id}`);
    };

    const handleDelete = () => {
        dispatch(patientsRemove({ id, cb: afterDelete }));
    };

    const afterDelete = () => {
        setIsDeleted(true);
        setAlert(
            <Toast message="Patient deleted successfully" type="warning" />
        );
        setTimeout(() => {
            setAlert(null);
            navigate("/patients");
        }, 3000);
    };

    return (
        <div>
            <Typography
                variant="h4"
                sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
            >
                Patient Details
                <IconButton onClick={onEdit}>
                    <EditIcon />
                </IconButton>
            </Typography>
            {loading && <PatientsLoading loading={loading && !patient} />}
            {error && <PatientsError error={error} />}
            {patient && (
                <>
                    <PatientDetails role={role} patient={patient} />
                    <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => setOpen(true)}
                            sx={{ my: 2, ml: 0 }}
                            size="large"
                            disabled={loading || isDeleted}
                        >
                            Delete
                        </Button>
                        <BackButton />
                    </Grid>
                    {role === "dr" && (
                        <>
                            <ConsultationsListHeader
                                onAddConsultation={onAddConsultation}
                            />
                            <ConsultationsList patientId={id} />
                        </>
                    )}
                </>
            )}
            {alert}
            <ConfirmDialog
                open={open}
                setOpen={setOpen}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default PatientsDetails;
