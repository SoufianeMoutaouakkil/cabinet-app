const PatientsLoading = ({ loading }) => {
    return (
        <>
            {loading && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
        </>
    );
};

export default PatientsLoading;
