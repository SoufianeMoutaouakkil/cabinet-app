import DetailRow from "../../common/details/DetailRow";
import DetailItem from "../../common/details/DetailItem";
import { Card, CardContent, Divider } from "@mui/material";

const ConsultationDetails = ({ consultation }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <DetailRow>
                        <DetailItem label="CID" value={consultation.cid} />
                        <DetailItem
                            label="Date"
                            value={new Date(
                                consultation.date
                            ).toLocaleDateString("fr-FR")}
                        />
                    </DetailRow>
                    <DetailItem label="Reason" value={consultation.reason} />
                    <DetailItem
                        label="Treatment"
                        value={consultation.treatment}
                        br={true}
                    />
                    <DetailItem
                        label="Echography"
                        value={consultation.echography}
                        br={true}
                    />
                    <DetailItem
                        label="Lab tests"
                        value={consultation.lab}
                        br={true}
                    />
                </CardContent>
            </Card>
            <Divider sx={{ my: 2 }} />
            <Card>
                <CardContent>
                    <DetailItem
                        label="Follow up Date"
                        value={consultation.followupDate}
                        type="date"
                    />
                    <DetailItem
                        label="Follow up Description"
                        value={consultation.followupDesc}
                    />
                </CardContent>
            </Card>
        </>
    );
};

export default ConsultationDetails;
