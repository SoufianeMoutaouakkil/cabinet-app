import { Button, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import PersonalInfos from "../form/PersonalInfos";
import MedicalInfos from "../form/MedicalInfos";
import { useNavigate } from "react-router-dom";
import BackButton from "../../common/form/BackButton";

const PatientsEdit = ({ patient, onUpdate, loading, role }) => {
    const navigate = useNavigate();

    const [fullname, setFullname] = useState(patient.fullname);
    const [birthdate, setBirthdate] = useState(
        new Date(patient.birthdate).toISOString().split("T")[0]
    );
    const [proffession, setProffession] = useState(patient.proffession);
    const [address, setAddress] = useState(patient.address);
    const [phone, setPhone] = useState(patient.phone);
    const [cin, setCin] = useState(patient.cin);
    const [hasInsurance, setHasInsurance] = useState(patient.hasInsurance);

    const [atcdM, setAtcdM] = useState(patient.atcdM);
    const [atcdGo, setAtcdGo] = useState(patient.atcdGo);
    const [atcdF, setAtcdF] = useState(patient.atcdF);
    const [atcdCh, setAtcdCh] = useState(patient.atcdCh);
    const [atcdToxic, setAtcdToxic] = useState(patient.atcdToxic);
    const [weight, setWeight] = useState(patient.weight);
    const [height, setHeight] = useState(patient.height);
    const [ta, setTa] = useState(patient.ta);
    const [other, setOther] = useState(patient.other);

    const handleUpdatePatient = () => {
        if (!fullname || !birthdate) {
            alert("Please fill in all the fields");
            return;
        }
        onUpdate({
            fullname,
            birthdate,
            proffession,
            address,
            phone,
            cin,
            hasInsurance,
            atcdM,
            atcdGo,
            atcdF,
            atcdCh,
            atcdToxic,
            weight,
            height,
            ta,
            other,
        });
    };

    return (
        <>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Update Patient
            </Typography>
            {loading && <Typography>Loading...</Typography>}
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
                    onClick={handleUpdatePatient}
                    sx={{ my: 2, ml: 0 }}
                    size="large"
                >
                    Save
                </Button>
                <BackButton />
            </Grid>
        </>
    );
};

export default PatientsEdit;
