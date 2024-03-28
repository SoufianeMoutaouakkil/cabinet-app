import { Divider, Grid } from "@mui/material";
import DetailLabel from "./DetailLabel";
import DetailValue from "./DetailValue";

const DetailItem = ({ value, label, br, type }) => {
    if (value && type === "date")
        value = new Date(value).toLocaleDateString("fr-FR");

    return (
        <>
            <Grid
                container
                display={"flex"}
                alignItems={"center"}
                minHeight={"40px"}
            >
                <Grid item xs={5} md={3}>
                    <DetailLabel label={label} />
                </Grid>
                <Grid item>
                    <DetailValue value={value} />
                </Grid>
            </Grid>
            {br && <Divider sx={{ color: "gray" }} />}
        </>
    );
};

export default DetailItem;
