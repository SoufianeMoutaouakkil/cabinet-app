import {
    Card,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";
import FormBox from "../../common/form/FormBox";
import DateInput from "../../common/form/DateInput";

const FollowupForm = ({
    followupDate,
    setFollowupDate,
    followupDesc,
    setFollowupDesc,
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Follow up
                </Typography>
                <FormBox>
                    <DateInput
                        value={followupDate}
                        setter={setFollowupDate}
                        label="Followup Date"
                    />
                    <TextField
                        label="Followup Description"
                        value={followupDesc}
                        onChange={(e) => setFollowupDesc(e.target.value)}
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
