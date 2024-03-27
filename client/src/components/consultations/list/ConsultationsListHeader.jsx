import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ConsultationsListHeader = ({ onAddConsultation }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                marginTop: "1rem",
            }}
        >
            <Typography variant="h5">Consultations</Typography>
            <IconButton
                onClick={onAddConsultation}
                color="primary"
                aria-label="add consultation"
                size="small"
            >
                <AddIcon /> Add Consultation
            </IconButton>
        </div>
    );
};

export default ConsultationsListHeader;
