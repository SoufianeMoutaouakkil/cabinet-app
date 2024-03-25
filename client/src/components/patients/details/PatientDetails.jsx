import React from "react";

const PatientDetails = ({ user, patient, onEdit }) => {
    return (
        <div>
            <p>File number: {patient.fileNumber}</p>
            <p>Name: {patient.fullname}</p>
            <p>CIN: {patient.cin}</p>
            {user.role === "admin" && (
                <>
                    <p>Age: {patient.birthdate}</p>
                    <p>Phone: {patient.phone}</p>
                    <p>Email: {patient.email}</p>
                    <p>Address: {patient.address}</p>
                </>
            )}
            <button onClick={() => onEdit(patient._id)}>Edit {patient._id}</button>
        </div>
    );
};

export default PatientDetails;
