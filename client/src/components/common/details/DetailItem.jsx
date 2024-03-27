import { Grid } from "@mui/material";
import DetailLabel from "./DetailLabel";
import DetailValue from "./DetailValue";

const DetailItem = ({ value, label }) => {
    return (
        <Grid
            container
            display={"flex"}
            alignItems={"center"}
            minHeight={"40px"}
        >
            <Grid item xs={3}>
                <DetailLabel label={label} />
            </Grid>
            <Grid item>
                <DetailValue value={value} />
            </Grid>
        </Grid>
    );
};

export default DetailItem;
