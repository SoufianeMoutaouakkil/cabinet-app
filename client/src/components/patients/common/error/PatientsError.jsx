const PatientsError = ({ error }) => {
    return (
        <>
            {error && (
                <div>
                    <h1>Error</h1>
                    <p>Something went wrong.</p>
                    <p>{error?.message ?? error}</p>
                </div>
            )}
        </>
    );
};

export default PatientsError;
