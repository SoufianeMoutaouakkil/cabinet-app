import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const ConsultationDetails = ({ consultation, onEdit }) => {
    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6">
                            <strong>CID:</strong>
                        </Typography>
                        <Typography variant="h6">
                            <strong>Date:</strong>
                        </Typography>
                        <Typography variant="h6">
                            <strong>Reason:</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">{consultation.cid}</Typography>
                        <Typography variant="h6">
                            {consultation.date}
                        </Typography>
                        <Typography variant="h6">
                            {consultation.reason}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Button
                onClick={() => onEdit(consultation._id)}
                variant="contained"
                color="warning"
                sx={{ margin: "0 1rem 1rem 1rem" }}
                size="large"
            >
                Edit
            </Button>
        </Card>
    );
};

export default ConsultationDetails;
