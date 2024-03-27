import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const PatientsSearch = ({ handleSearch }) => {
    const [q, setQ] = useState("");

    useEffect(() => {
        handleSearch();
    }, []);

    const prepareQuery = (value) => {
        setQ(value);
        let query = value.trim();
        if (query.length !== 0) {
            query = {
                operator: "or",
                value: [
                    { field: "fullname", value: query, operator: "regex" },
                    { field: "fileNumber", value: query, operator: "regex" },
                    { field: "cin", value: query, operator: "regex" },
                ],
            };
            handleSearch(query);
        } else {
            handleSearch();
        }
    };

    return (
        <div>
            <TextField
                variant="standard"
                margin="normal"
                fullWidth
                id="search"
                name="search"
                label="Search"
                placeholder="Name, File Number, CIN..."
                value={q}
                onChange={(e) => prepareQuery(e.target.value)}
            />
        </div>
    );
};

export default PatientsSearch;
