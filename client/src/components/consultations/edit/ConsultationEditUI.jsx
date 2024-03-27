import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
    Divider,
} from "@mui/material";

const ConsultationEdit = ({ consultation, onSave }) => {
    const [cid] = useState(consultation.cid);
    const [date, setDate] = useState(consultation.date);
    const [reason, setReason] = useState(consultation.reason);
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

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Edit Consultation</Typography>
                <Divider sx={{ margin: "1rem 0" }} />
                
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="CID" value={cid} disabled fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onSave({
                                cid,
                                date,
                                reason,
                            })}
                            disabled={!isChanged}
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ConsultationEdit;
