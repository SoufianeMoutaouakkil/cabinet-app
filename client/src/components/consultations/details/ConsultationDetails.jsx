const ConsultationDetails = ({ consultation, onEdit }) => {
    return (
        <div>
            <p>Id : {consultation.cid}</p>
            <p>Date : {consultation.date}</p>
            <p>Reason : {consultation.reason}</p>
            <p>Treatment : {consultation.treatment}</p>
            <p>Echography : {consultation.echography}</p>
            <button onClick={() => onEdit(consultation._id)}>Edit</button>
        </div>
    );
};

export default ConsultationDetails;
