import { Box } from "@mui/material";

const DetailRow = ({ children }) => {
    return (
        <Box
            sx={{
                display: "flex",
                mb: 1.2,
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            {children.map((child, index) => (
                <Box key={index} sx={{ flex: 1 }}>
                    {child}
                </Box>
            ))}
        </Box>
    );
};

export default DetailRow;
