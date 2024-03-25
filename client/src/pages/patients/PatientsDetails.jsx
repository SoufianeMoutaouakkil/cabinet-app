import { useParams } from "react-router-dom";

const PatientsDetails = () => {
    const id = useParams().id;
    return (
        <div>
            <h1>Patient Details</h1>
            <p>ID: {id}</p>
        </div>
    );
}

export default PatientsDetails;
