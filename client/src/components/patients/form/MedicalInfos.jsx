import {
    Card,
    CardContent,
    TextField,
    Typography,
    Box,
    InputAdornment,
} from "@mui/material";

const MedicalInfos = ({
    atcdM,
    setAtcdM,
    atcdGo,
    setAtcdGo,
    atcdF,
    setAtcdF,
    atcdCh,
    setAtcdCh,
    atcdToxic,
    setAtcdToxic,
    weight,
    setWeight,
    height,
    setHeight,
    ta,
    setTa,
    other,
    setOther,
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Medical Informations</Typography>
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
                            type="number"
                            label="Weight"
                            placeholder={"Weight ..."}
                            sx={{ borderRadius: "6px" }}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        kg
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            type="number"
                            label="Height"
                            placeholder={"Height ..."}
                            sx={{ borderRadius: "6px" }}
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        cm
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="TA"
                            placeholder={"TA ..."}
                            sx={{ borderRadius: "6px" }}
                            value={ta}
                            onChange={(e) => setTa(e.target.value)}
                            fullWidth
                        />
                    </Box>
                    <TextField
                        label="ATCD M"
                        placeholder={"ATCD M ..."}
                        sx={{ borderRadius: "6px" }}
                        value={atcdM}
                        onChange={(e) => setAtcdM(e.target.value)}
                        multiline
                        fullWidth
                        maxRows={4}
                    />
                    <TextField
                        label="ATCD Go"
                        placeholder={"ATCD Go ..."}
                        sx={{ borderRadius: "6px" }}
                        value={atcdGo}
                        onChange={(e) => setAtcdGo(e.target.value)}
                        multiline
                        fullWidth
                        maxRows={4}
                    />
                    <TextField
                        label="ATCD F"
                        placeholder={"ATCD F ..."}
                        sx={{ borderRadius: "6px" }}
                        value={atcdF}
                        onChange={(e) => setAtcdF(e.target.value)}
                        multiline
                        fullWidth
                        maxRows={4}
                    />
                    <TextField
                        label="ATCD Ch"
                        placeholder={"ATCD Ch ..."}
                        sx={{ borderRadius: "6px" }}
                        value={atcdCh}
                        onChange={(e) => setAtcdCh(e.target.value)}
                        multiline
                        fullWidth
                        maxRows={4}
                    />
                    <TextField
                        label="ATCD Toxic"
                        placeholder={"ATCD Toxic ..."}
                        sx={{ borderRadius: "6px" }}
                        value={atcdToxic}
                        onChange={(e) => setAtcdToxic(e.target.value)}
                        multiline
                        fullWidth
                        maxRows={4}
                    />
                    <TextField
                        label="Other"
                        placeholder={"Other ..."}
                        sx={{ borderRadius: "6px" }}
                        value={other}
                        onChange={(e) => setOther(e.target.value)}
                        multiline
                        fullWidth
                        maxRows={4}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default MedicalInfos;
