import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const PatientDetails = ({ user, patient, onEdit }) => {
    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6">
                            <strong>File Number</strong>
                        </Typography>
                        <Typography variant="h6">
                            <strong>Name</strong>
                        </Typography>
                        <Typography variant="h6">
                            <strong>CIN</strong>
                        </Typography>
                        {user.role === "admin" && (
                            <>
                                <Typography variant="h6">
                                    <strong>Birth date</strong>
                                </Typography>
                                <Typography variant="h6">
                                    <strong>Phone</strong>
                                </Typography>
                                <Typography variant="h6">
                                    <strong>Email</strong>
                                </Typography>
                                <Typography variant="h6">
                                    <strong>Address</strong>
                                </Typography>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">
                            : {patient.fileNumber}
                        </Typography>
                        <Typography variant="h6">
                            : {patient.fullname}
                        </Typography>
                        <Typography variant="h6">: {patient.cin}</Typography>
                        {user.role === "admin" && (
                            <>
                                <Typography variant="h6">
                                    :{" "}
                                    {patient.birthdate
                                        ? new Date(
                                              patient.birthdate
                                          ).toLocaleDateString("fr-FR")
                                        : ""}
                                </Typography>
                                <Typography variant="h6">
                                    : {patient.phone}
                                </Typography>
                                <Typography variant="h6">
                                    : {patient.email}
                                </Typography>
                                <Typography variant="h6">
                                    : {patient.address}
                                </Typography>
                            </>
                        )}
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => onEdit(patient._id)}
                >
                    Edit
                </Button>
            </CardContent>
        </Card>
    );
};

export default PatientDetails;
