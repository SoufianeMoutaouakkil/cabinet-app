import { Button, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import PersonalInfos from "../form/PersonalInfos";
import MedicalInfos from "../form/MedicalInfos";
import { useNavigate } from "react-router-dom";

const PatientsNew = ({ createPatient, role, loading, isCreated }) => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [birthdate, setBirthdate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [proffession, setProffession] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [cin, setCin] = useState("");
    const [hasInsurance, setHasInsurance] = useState(false);

    const [atcdM, setAtcdM] = useState("");
    const [atcdGo, setAtcdGo] = useState("");
    const [atcdF, setAtcdF] = useState("");
    const [atcdCh, setAtcdCh] = useState("");
    const [atcdToxic, setAtcdToxic] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [ta, setTa] = useState("");
    const [other, setOther] = useState("");

    const handleCreatePatient = () => {
        if (!fullname || !birthdate) {
            alert("Please fill in all the fields");
            return;
        }
        createPatient({
            fullname,
            birthdate,
            proffession,
            address,
            phone,
            cin,
        });
    };

    return (
        <>
            <Typography variant="h4" sx={{ mb: 2 }}>
                New Patient
            </Typography>
            <PersonalInfos
                {...{
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
                }}
            />
            {role === "dr" && (
                <>
                    <Divider sx={{ my: 2 }} />
                    <MedicalInfos
                        {...{
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
                        }}
                    />
                </>
            )}
            <Grid container justifyContent="flex-end">
                <Button
                    variant="contained"
                    onClick={handleCreatePatient}
                    sx={{ my: 2, ml: 0 }}
                    size="large"
                    disabled={loading || isCreated}
                >
                    Create
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => navigate(`/patients`)}
                    sx={{ m: 2 }}
                    size="large"
                >
                    Back
                </Button>
            </Grid>
        </>
    );
};

export default PatientsNew;
