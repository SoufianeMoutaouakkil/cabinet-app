import DetailRow from "../../common/details/DetailRow";
import DetailItem from "../../common/details/DetailItem";
import { Card, CardContent } from "@mui/material";

const ConsultationDetails = ({ consultation }) => {
    return (
        <Card>
            <CardContent>
                <DetailRow>
                    <DetailItem label="CID" value={consultation.cid} />
                    <DetailItem
                        label="Date"
                        value={new Date(consultation.date).toLocaleDateString(
                            "fr-FR"
                        )}
                    />
                </DetailRow>
                <DetailItem label="Reason" value={consultation.reason} />
                <DetailItem label="Treatment" value={consultation.treatment} />
                <DetailItem
                    label="Echography"
                    value={consultation.echography}
                />
                <DetailItem label="Lab tests" value={consultation.lab} />
            </CardContent>
        </Card>
    );
};

export default ConsultationDetails;
