import { Card, CardContent, Typography } from "@mui/material";
import DetailRow from "../../common/details/DetailRow";
import DetailItem from "../../common/details/DetailItem";

const PersonalInfos = ({ patient }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Medical Information
                </Typography>
                <DetailRow>
                    <DetailItem label="Weight" value={patient.weight} />
                    <DetailItem label="Height" value={patient.height} />
                    <DetailItem label="TA" value={patient.ta} />
                </DetailRow>
                <DetailItem label="ATCD-M" value={patient.atcdM} br={true} />
                <DetailItem label="ATCD-F" value={patient.atcdF} br={true} />
                <DetailItem label="ATCD-Go" value={patient.atcdGo} br={true} />
                <DetailItem label="ATCD-Ch" value={patient.atcdCh} br={true} />
                <DetailItem
                    label="ATCD-Toxic"
                    value={patient.atcdToxic}
                    br={true}
                />
                <DetailItem label="Other" value={patient.other} />
            </CardContent>
        </Card>
    );
};

export default PersonalInfos;
