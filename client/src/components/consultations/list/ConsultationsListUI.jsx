import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ConsultationsListUI = ({ consultations }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>CID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Reason</TableCell>
                        <TableCell>Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consultations && consultations.map((item, index) => (
                        <TableRow key={item._id ?? index}>
                            <TableCell>{item.cid}</TableCell>
                            <TableCell>
                                {item.date
                                    ? new Date(item.date).toLocaleDateString("fr-FR")
                                    : ""}
                            </TableCell>
                            <TableCell>{item.reason}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/consultations/${item._id}?patientId=${item.patient}`} variant="contained" color="primary">
                                    Details
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ConsultationsListUI;