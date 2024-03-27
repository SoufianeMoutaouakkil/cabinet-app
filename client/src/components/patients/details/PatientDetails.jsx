import { Divider } from "@mui/material";
import PersonalInfos from "./PersonalInfos";
import MedicalInfos from "./MedicalInfos";

const PatientDetails = ({ role, patient }) => {
    return (
        <>
            <PersonalInfos patient={patient} />
            {role === "dr" && (
                <>
                    <Divider sx={{ my: 2 }} />
                    <MedicalInfos patient={patient} />
                    <Divider sx={{ my: 2 }} />
                </>
            )}
        </>
    );
};

export default PatientDetails;
