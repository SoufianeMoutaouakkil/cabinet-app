import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ConsultationsNew = ({ createConsultation }) => {
    const [searchParams] = useSearchParams();
    const patientId = searchParams.get("patientId");

    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [reason, setReason] = useState("");
    const [treatment, setTreatment] = useState("");
    const [echography, setEchography] = useState("");

    const handleCreateConsultation = () => {
        if (!date || !reason) {
            alert("Please fill in date and reason");
            return;
        }
        createConsultation({
            date,
            reason,
            treatment,
            echography,
            patient: patientId,
        });
    };

    const onBack = () => {
        if (patientId) {
            navigate(`/patients/${patientId}`);
        } else {
            navigate(`/consultations`);
        }
    };

    return (
        <div>
            <h1>New Consultation</h1>
            <form>
                <label htmlFor="reason">Reason:</label>
                <input
                    type="text"
                    id="reason"
                    onChange={(e) => setReason(e.target.value)}
                />
                <br />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                />
                <br />
                <label htmlFor="treatment">Treatment:</label>
                <input
                    type="text"
                    id="treatment"
                    onChange={(e) => setTreatment(e.target.value)}
                />
                <br />
                <label htmlFor="echography">Echography:</label>
                <input
                    type="text"
                    id="echography"
                    onChange={(e) => setEchography(e.target.value)}
                />
                <br />
                <button type="button" onClick={handleCreateConsultation}>
                    Create
                </button>
                <button type="button" onClick={onBack}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default ConsultationsNew;
