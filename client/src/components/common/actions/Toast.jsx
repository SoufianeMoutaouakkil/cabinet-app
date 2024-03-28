import * as React from "react";
import { Alert, Snackbar } from "@mui/material";

function Toast({
    message,
    vertical = "bottom",
    horizontal = "right",
    type = "success",
}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(true);
    }, [message]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
        >
            <Alert severity={type} onClose={handleClose}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Toast;
