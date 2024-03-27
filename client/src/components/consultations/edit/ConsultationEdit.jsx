import { useState, useEffect } from "react";
import { Typography, Button, Grid, Divider } from "@mui/material";
import ConsultationForm from "../form/ConsultationForm";
import FollowupForm from "../form/FollowupForm";
import BackButton from "../../common/form/BackButton";

const ConsultationEdit = ({ consultation, onUpdate }) => {
    const [cid] = useState(consultation.cid);
    const [date, setDate] = useState(
        new Date(consultation.date).toISOString().split("T")[0]
    );
    const [reason, setReason] = useState(consultation.reason);
    const [treatment, setTreatment] = useState(consultation.treatment);
    const [echography, setEchography] = useState(consultation.echography);
    const [lab, setLab] = useState(consultation.lab);
    const [followUpDate, setFollowUpDate] = useState(consultation.followUpDate);
    const [followUpDesc, setFollowUpDesc] = useState(consultation.followUpDesc);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (
            cid !== consultation.cid ||
            date !== consultation.date ||
            reason !== consultation.reason
        ) {
            setIsChanged(true);
        } else {
            setIsChanged(false);
        }
    }, [cid, date, reason, consultation]);

    const handleSave = () => {
        onUpdate({
            cid,
            date,
            reason,
            treatment,
            echography,
            lab,
            followUpDate,
            followUpDesc,
        });
    };

    return (
        <>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Update Consultation
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
            <FollowupForm
                {...{
                    followUpDate,
                    setFollowUpDate,
                    followUpDesc,
                    setFollowUpDesc,
                }}
            />
            <Divider sx={{ my: 2 }} />
            <Grid container justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={!isChanged}
                >
                    Save
                </Button>
                <BackButton />
            </Grid>
        </>
    );
};

export default ConsultationEdit;
