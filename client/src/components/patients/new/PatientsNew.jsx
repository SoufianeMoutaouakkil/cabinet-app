import { useState } from "react";

const PatientsNew = ({ createPatient }) => {
    const [fullname, setFullname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [proffession, setProffession] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [cin, setCin] = useState("");

    const handleCreatePatient = () => {
        if (!fullname || !birthdate) {
            alert("Please fill in all the fields");
            return;
        }
        createPatient({ fullname, birthdate, proffession, address, phone, cin });
    };

    return (
        <div>
            <h1>New Patient</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setFullname(e.target.value)}
                />
                <br />
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                    type="date"
                    id="birthdate"
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <br />
                <label htmlFor="proffession">Proffession:</label>
                <input
                    type="text"
                    id="proffession"
                    onChange={(e) => setProffession(e.target.value)}
                />
                <br />
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label htmlFor="cin">CIN:</label>
                <input
                    type="text"
                    id="cin"
                    onChange={(e) => setCin(e.target.value)}
                />
                <br />
                <button type="button" onClick={handleCreatePatient}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default PatientsNew;
