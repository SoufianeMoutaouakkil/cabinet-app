import { useState, useEffect } from "react";
import { Typography, Button, Grid, Divider } from "@mui/material";
import ConsultationForm from "../form/ConsultationForm";
import FollowupForm from "../form/FollowupForm";
import BackButton from "../../common/form/BackButton";

const ConsultationEdit = ({ consultation, onUpdate, loading }) => {
    const [cid] = useState(consultation.cid);
    const [date, setDate] = useState(
        new Date(consultation.date).toISOString().split("T")[0]
    );
    const [reason, setReason] = useState(consultation.reason);
    const [treatment, setTreatment] = useState(consultation.treatment);
    const [echography, setEchography] = useState(consultation.echography);
    const [lab, setLab] = useState(consultation.lab);
    const [followupDate, setFollowupDate] = useState(consultation.followupDate);
    const [followupDesc, setFollowupDesc] = useState(consultation.followupDesc);
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
        const data = {
            cid,
            date,
            reason,
            treatment,
            echography,
            lab,
            followupDate,
            followupDesc,
        };
        onUpdate(data);
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
                    followupDate,
                    setFollowupDate,
                    followupDesc,
                    setFollowupDesc,
                }}
            />
            <Divider sx={{ my: 2 }} />
            <Grid container justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={!isChanged || loading}
                >
                    Save
                </Button>
                <BackButton url={`/consultations/${consultation._id}`} />
            </Grid>
        </>
    );
};

export default ConsultationEdit;
