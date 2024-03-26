import { useEffect, useState } from "react";

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
            <input
                type="text"
                value={q}
                onChange={(e) => prepareQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
};

export default PatientsSearch;
