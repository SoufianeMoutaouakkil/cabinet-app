const ConsultationDetails = ({ consultation, onEdit }) => {
    return (
        <div>
            <p>Id : {consultation.cid}</p>
            <p>Date : {consultation.date}</p>
            <p>Reason : {consultation.reason}</p>
            <button onClick={() => onEdit(consultation._id)}>
                Edit {consultation._id}
            </button>
        </div>
    );
};

export default ConsultationDetails;
