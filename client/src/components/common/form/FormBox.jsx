import { Box } from "@mui/material";

const FormBox = ({ children, gap, flexDirection }) => {
    gap = gap || 2;
    flexDirection = flexDirection || "column";
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection,
                gap,
            }}
        >
            {children}
        </Box>
    );
};

export default FormBox;
