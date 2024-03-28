import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
} from "@mui/material";
import Draggable from "react-draggable";

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function ConfirmDialog({
    open,
    setOpen,
    title,
    message,
    onConfirm,
}) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                {title || "Confirm"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message || "Are you sure you want to do this?"}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        onConfirm();
                        handleClose();
                    }}
                    color="error"
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
