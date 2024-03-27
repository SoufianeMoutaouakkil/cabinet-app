import { FormControl, Input, InputLabel } from "@mui/material";

const DateInput = ({ label, value, setter }) => {
    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor={"date-input-" + label} shrink>
                {label}
            </InputLabel>
            <Input
                type="date"
                value={value}
                onChange={(e) => setter(e.target.value)}
                id={"date-input-" + label}
            />
        </FormControl>
    );
};

export default DateInput;
