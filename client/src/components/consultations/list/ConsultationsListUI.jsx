const ConsultationsListUI = ({ consultations }) => {
    return (
        <>
            {consultations && (
                <div>
                    <h1>Data List</h1>
                    {consultations.length === 0 && <h1>No data</h1>}

                    <ul>
                        {consultations.length > 0 &&
                            consultations.map((item, index) => (
                                <li key={item._id ?? index}>
                                    {item.cid} - {item.date} - {item.time} -{" "}
                                    {item.patient} - {item.reason}
                                    <a href={`/consultations/${item._id}?patientId=${item.patient}`}>Details</a>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ConsultationsListUI;
