import { Card, CardContent, Typography } from "@mui/material";
import DetailRow from "../../common/details/DetailRow";
import DetailItem from "../../common/details/DetailItem";

const PersonalInfos = ({ patient }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Personal Information
                </Typography>
                <DetailRow>
                    <DetailItem
                        label="File number"
                        value={patient.fileNumber}
                    />
                    <DetailItem label="Full name" value={patient.fullname} />
                </DetailRow>
                <DetailRow>
                    <DetailItem label="CIN" value={patient.cin} />
                    <DetailItem
                        label="Birthdate"
                        value={new Date(patient.birthdate).toLocaleDateString(
                            "fr-FR"
                        )}
                    />
                </DetailRow>
                <DetailRow>
                    <DetailItem label="Phone" value={patient.phone} />
                    <DetailItem label="Address" value={patient.address} />
                </DetailRow>
                <DetailRow>
                    <DetailItem label="Profession" value={patient.profession} />
                    <DetailItem
                        label="Has insurance"
                        value={patient.hasInsurance ? "Yes" : "No"}
                    />
                </DetailRow>
            </CardContent>
        </Card>
    );
};

export default PersonalInfos;
