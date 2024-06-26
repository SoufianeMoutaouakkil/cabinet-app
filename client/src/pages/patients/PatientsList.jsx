import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { patientsSearch } from "../../services/store/slices/patientsSlice";
import PatientsError from "../../components/patients/common/error/PatientsError";
import PatientsLoading from "../../components/patients/common/loading/PatientsLoading";
import PatientsListComponent from "../../components/patients/list/PatientsList";
import PatientsSearch from "../../components/patients/list/PatientsSearch";

const PatientsList = () => {
    const searchPatients = useSelector((state) => state.patients?.search);
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // handle data
    useEffect(() => {
        if (searchPatients?.data) {
            setData(searchPatients.data);
        } else {
            setData(null);
        }
    }, [searchPatients]);

    // handle loading
    useEffect(() => {
        if (searchPatients?.loading) setLoading(true);
        else setLoading(false);
    }, [searchPatients]);

    // handle error
    useEffect(() => {
        if (searchPatients?.error) setError(searchPatients?.error);
        else setError(null);
    }, [searchPatients]);

    const handleSearch = (query) => {
        dispatch(patientsSearch({ query }));
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Patients List</h1>
                <PatientsSearch handleSearch={handleSearch} />
            </div>
            <PatientsLoading loading={loading && !data} />
            <PatientsError error={error} />
            <PatientsListComponent patients={data} />
        </div>
    );
};

export default PatientsList;
