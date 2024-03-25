import { useParams } from "react-router-dom";

const PatientsEdit = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Edit Patient</h1>
            <p>ID: {id}</p>
        </div>
    );
}

export default PatientsEdit;
