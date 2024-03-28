import { useState } from "react";
import { Typography, Button, Grid, Divider } from "@mui/material";
import ConsultationForm from "../form/ConsultationForm";
import BackButton from "../../common/form/BackButton";
import { useSearchParams } from "react-router-dom";

const ConsultationEdit = ({ onCreate, loading, isCreated }) => {
    const [cid] = useState("");
    const [searchParams] = useSearchParams();
    const patientId = searchParams.get("patientId");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [reason, setReason] = useState("");
    const [treatment, setTreatment] = useState("");
    const [echography, setEchography] = useState("");
    const [lab, setLab] = useState("");

    const handleSave = () => {
        onCreate({
            patient: patientId,
            cid,
            date,
            reason,
            treatment,
            echography,
            lab,
        });
    };

    return (
        <>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Create Consultation
            </Typography>
            <ConsultationForm
                {...{
                    cid,
                    date,
                    setDate,
                    reason,
                    setReason,
                    treatment,
                    setTreatment,
                    echography,
                    setEchography,
                    lab,
                    setLab,
                }}
            />
            <Divider sx={{ my: 2 }} />
            <Grid container justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={!date || !reason || loading || isCreated}
                >
                    Save
                </Button>
                <BackButton url={`/patients/${patientId}`} />
            </Grid>
        </>
    );
};

export default ConsultationEdit;
