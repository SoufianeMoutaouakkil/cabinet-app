import {
    CardContent,
    Typography,
    Checkbox,
    Card,
    TextField,
    FormControlLabel,
    Box,
    FormGroup,
} from "@mui/material";

const PersonalInfos = ({
    fullname,
    setFullname,
    birthdate,
    setBirthdate,
    phone,
    setPhone,
    cin,
    setCin,
    address,
    setAddress,
    proffession,
    setProffession,
    hasInsurance,
    setHasInsurance,
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Personal Information</Typography>

                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={hasInsurance} />}
                        label=" Has Insurance"
                        labelPlacement="start"
                        onChange={(e) => setHasInsurance(e.target.checked)}
                    />
                </FormGroup>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            label="CIN"
                            value={cin}
                            onChange={(e) => setCin(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Birth Date"
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            fullWidth
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Proffession"
                            value={proffession}
                            onChange={(e) => setProffession(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                        />
                    </Box>
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default PersonalInfos;
