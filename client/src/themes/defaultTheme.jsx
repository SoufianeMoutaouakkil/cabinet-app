// create default theme for the app with mui
// Path: client/src/themes/defaultTheme.jsx

import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
});

export default defaultTheme;
