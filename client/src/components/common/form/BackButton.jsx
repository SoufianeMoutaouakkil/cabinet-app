import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = ({url}) => {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => {
                navigate(url);
            }}
            sx={{ ml: 2 }}
        >
            Back
        </Button>
    );
};

export default BackButton;
