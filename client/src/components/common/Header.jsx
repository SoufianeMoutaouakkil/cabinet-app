import Logout from "./Logout";

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <a href="/patients">Patients</a>
            <a href="/patients/new">New Patient</a>
            <Logout />
        </div>
    );
};

export default Header;
