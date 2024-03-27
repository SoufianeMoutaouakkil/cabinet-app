import {
    Card,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";
import FormBox from "../../common/form/FormBox";
import DateInput from "../../common/form/DateInput";

const FollowupForm = ({
    followUpDate,
    setFollowUpDate,
    followUpDesc,
    setFollowUpDesc,
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Follow up
                </Typography>
                <FormBox>
                    <DateInput
                        value={followUpDate}
                        setter={setFollowUpDate}
                        label="Followup Date"
                    />
                    <TextField
                        label="Followup Description"
                        value={followUpDesc}
                        onChange={(e) => setFollowUpDesc(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                    />
                </FormBox>
            </CardContent>
        </Card>
    );
};

export default FollowupForm;
