import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { consultationsGetById } from "../../services/store/slices/consultationsSlice";
import { useEffect, useState } from "react";
import ConsultationsLoading from "../../components/consultations/common/loading/ConsultationsLoading";
import ConsultationsError from "../../components/consultations/common/error/ConsultationsError";
import ConsultationDetails from "../../components/consultations/details/ConsultationDetails";
import { Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import BackButton from "../../components/common/form/BackButton";

const ConsultationsDetails = () => {
    const [searchParams] = useSearchParams();
    const patientId = searchParams.get("patientId");

    const navigate = useNavigate();
    const id = useParams().id;
    const consultationById = useSelector(
        (state) => state.consultations?.getById
    );
    const dispatch = useDispatch();
    const [consultation, setConsultation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getConsultationById();
    }, [dispatch, id]);

    useEffect(() => {
        if (consultationById?.data) setConsultation(consultationById.data);
        else setConsultation(null);

        if (consultationById?.loading) setLoading(true);
        else setLoading(false);

        if (consultationById?.error) setError(consultationById.error);
        else setError(null);
    }, [consultationById]);

    const getConsultationById = () => {
        dispatch(consultationsGetById({ id }));
    };

    const onEdit = () => {
        navigate(`/consultations/${id}/edit?patientId=${patientId}`);
    };

    return (
        <div>
            <Typography
                variant="h4"
                sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
            >
                Consultation Details
                <IconButton onClick={onEdit}>
                    <EditIcon />
                </IconButton>
            </Typography>
            {loading && (
                <ConsultationsLoading loading={loading && !consultation} />
            )}
            {error && <ConsultationsError error={error} />}
            {consultation && (
                <>
                    <ConsultationDetails consultation={consultation} />
                </>
            )}
            <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
                <BackButton />
            </Grid>
        </div>
    );
};

export default ConsultationsDetails;
