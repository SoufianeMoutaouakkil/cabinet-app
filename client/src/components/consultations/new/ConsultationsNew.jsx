import { useState } from "react";
import { Typography, Button, Grid, Divider } from "@mui/material";
import ConsultationForm from "../form/ConsultationForm";
import BackButton from "../../common/form/BackButton";

const ConsultationEdit = ({ onCreate }) => {
    const [cid] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [reason, setReason] = useState("");
    const [treatment, setTreatment] = useState("");
    const [echography, setEchography] = useState("");
    const [lab, setLab] = useState("");

    const handleSave = () => {
        onCreate({
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
                >
                    Save
                </Button>
                <BackButton />
            </Grid>
        </>
    );
};

export default ConsultationEdit;
