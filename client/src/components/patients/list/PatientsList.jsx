import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

const columns = [
    {
        id: "fileNumber",
        label: "File Number",
        minWidth: 170,
    },
    { id: "fullname", label: "Full Name", minWidth: 100 },
    {
        id: "birthdate",
        label: "Birth Date",
        minWidth: 170,
        align: "right",
        format: (value) => {
            const date = new Date(value);
            return date.toLocaleDateString("fr-FR");
        },
    },
    {
        id: "phone",
        label: "Phone",
        minWidth: 170,
        align: "right",
    },
    {
        id: "cin",
        label: "CIN",
        minWidth: 170,
        align: "right",
    },
    {
        id: "address",
        label: "Address",
        minWidth: 170,
        align: "right",
    },
    {
        id: "proffession",
        label: "Proffession",
        minWidth: 170,
        align: "right",
    },
];

const ListPatients = ({ patients }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            {patients && (
                <Paper sx={{ width: "100%" }}>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={patients.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patients
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row._id}
                                                onClick={() => {
                                                    navigate(
                                                        `/patients/${row._id}`
                                                    );
                                                }}
                                            >
                                                {columns.map((column) => {
                                                    const value =
                                                        row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {column.format
                                                                ? column.format(
                                                                      value
                                                                  )
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            )}
        </>
    );
};

export default ListPatients;
