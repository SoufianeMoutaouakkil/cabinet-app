import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ConsultationEdit = ({ consultation, loading, onUpdate }) => {
    const [searchParams] = useSearchParams();
    const patientId = searchParams.get("patientId");

    const [cid] = useState(consultation.cid);
    const [date, setDate] = useState(consultation.date);
    const [reason, setReason] = useState(consultation.reason);

    const [isChanged, setIsChanged] = useState(false);
    const navigate = useNavigate();

    const onCancel = () => {
        if (consultation._id) {
            let url = `/consultations/${consultation._id}`;
            if (patientId) url += `?patientId=${patientId}`;
            navigate(url);
        } else {
            if (patientId) navigate(`/patients/${patientId}`);
            else navigate(`/consultations`);
        }
    };

    const onSave = () => {
        const data = {
            cid,
            date,
            reason,
        };
        onUpdate(data);
    };
    useEffect(() => {
        if (
            cid !== consultation.cid ||
            date !== consultation.date ||
            reason !== consultation.reason
        ) {
            setIsChanged(true);
        } else {
            setIsChanged(false);
        }
    }, [cid, date, reason, consultation]);

    return (
        <div>
            <form>
                <label htmlFor="cid">Id</label>
                <input type="text" id="cid" value={cid} disabled={true} />
                <br />
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                        setIsChanged(true);
                    }}
                />
                <br />
                <label htmlFor="reason">Reason</label>
                <input
                    type="text"
                    id="reason"
                    value={reason}
                    onChange={(e) => {
                        setReason(e.target.value);
                        setIsChanged(true);
                    }}
                />

                <br />
                <button onClick={onCancel}>Cancel</button>
                <button
                    type="button"
                    disabled={loading || !isChanged}
                    onClick={onSave}
                >
                    {" "}
                    Save
                </button>
            </form>
        </div>
    );
};

export default ConsultationEdit;
