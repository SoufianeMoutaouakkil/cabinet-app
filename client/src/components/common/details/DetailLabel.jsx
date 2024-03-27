import { Typography } from "@mui/material";

const DetailLabel = ({ label }) => {
    return (
        <Typography
            variant="h6"
            sx={{
                color: "gray",
                fontSize: "0.9rem",
                height: "100%",
            }}
        >
            {label}
        </Typography>
    );
};

export default DetailLabel;
