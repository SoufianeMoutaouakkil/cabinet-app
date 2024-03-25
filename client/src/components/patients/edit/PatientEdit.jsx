import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientEdit({ patient, onUpdate, loading }) {
    const [fileNumber, setFileNumber] = useState(patient.fileNumber);
    const [fullname, setFullname] = useState(patient.fullname);
    const [cin, setCin] = useState(patient.cin);
    const [birthdate, setBirthdate] = useState(patient.birthdate);
    const [phone, setPhone] = useState(patient.phone);
    const [email, setEmail] = useState(patient.email);
    const [address, setAddress] = useState(patient.address);
    const [proffession, setProffession] = useState(patient.proffession);

    const [isChanged, setIsChanged] = useState(false);
    const navigate = useNavigate();

    const onCancel = () => {
        // console.log("PatientEdit: onCancel: patient: ", patient);
        if (patient._id) navigate(`/patients/${patient._id}`);
        else navigate(`/patients`);
    };

    useEffect(() => {
        if (isDifferent()) {
            setIsChanged(true);
        }
    }, [
        fileNumber,
        fullname,
        cin,
        birthdate,
        phone,
        email,
        address,
        proffession,
    ]);
    const onSave = () => {
        const data = {
            fileNumber,
            fullname,
            cin,
            birthdate,
            phone,
            email,
            address,
            proffession,
        };
        console.log("PatientEdit: onSave: data: ", data);
        onUpdate(data);
    };

    const isDifferent = () => {
        return (
            fileNumber !== patient.fileNumber ||
            fullname !== patient.fullname ||
            cin !== patient.cin ||
            birthdate !== patient.birthdate ||
            phone !== patient.phone ||
            email !== patient.email ||
            address !== patient.address ||
            proffession !== patient.proffession
        );
    };

    return (
        <div>
            <h1>Patient Edit</h1>
            <form>
                <div>
                    <label>File number</label>
                    <input type="text" value={fileNumber} disabled={true} />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div>
                    <label>CIN</label>
                    <input
                        type="text"
                        value={cin}
                        onChange={(e) => setCin(e.target.value)}
                    />
                </div>
                <div>
                    <label>Birthdate</label>
                    <input
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label>Proffession</label>
                    <input
                        type="text"
                        value={proffession}
                        onChange={(e) => setProffession(e.target.value)}
                    />
                </div>
                <button type="button" onClick={onCancel}>
                    {" "}
                    Cancel
                </button>
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
}
