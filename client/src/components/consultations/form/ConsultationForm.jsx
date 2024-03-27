import { Card, CardContent, TextField, Typography } from "@mui/material";
import FormBox from "../../common/form/FormBox";
import DateInput from "../../common/form/DateInput";

const ConsultationForm = ({
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
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Consultation
                </Typography>
                <FormBox>
                    <FormBox flexDirection="row">
                        {cid && (
                            <TextField
                                label="CID"
                                value={cid}
                                disabled
                                fullWidth
                            />
                        )}
                        <DateInput value={date} setter={setDate} label="Date" />
                    </FormBox>
                    <TextField
                        label="Reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Treatment"
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="Echography"
                        value={echography}
                        onChange={(e) => setEchography(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="Lab tests"
                        value={lab}
                        onChange={(e) => setLab(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                    />
                </FormBox>
            </CardContent>
        </Card>
    );
};

export default ConsultationForm;
