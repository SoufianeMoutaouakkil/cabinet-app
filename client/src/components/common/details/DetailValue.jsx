import { Typography } from "@mui/material";
const Empty = () => {
    return <em style={{ color: "gray", fontSize: "0.8rem" }}>Empty</em>;
};

const DetailValue = ({ value }) => {
    return <Typography variant="h6">{value ? value : <Empty />}</Typography>;
};

export default DetailValue;
