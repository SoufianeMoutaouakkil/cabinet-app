const ListPatients = ({ patients }) => {
    return (
        <>
            {patients && (
                <div>
                    <h1>Data List</h1>
                    { patients.length === 0 && <h1>No data</h1> }

                    <ul>
                        {patients.length > 0  && patients.map((item, index) => (
                            <li key={item._id ?? index}>
                                {item.fileNumber} - {item.fullname} - {item.birthdate} 
                                <a href={`/patients/${item._id}`}>Details</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ListPatients;
