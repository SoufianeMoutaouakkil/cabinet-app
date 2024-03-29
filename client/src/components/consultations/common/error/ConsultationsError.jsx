import Toast from "../../../common/dialog/Toast";

export default function ConsultationsError({ error }) {
    return <>{error && <Toast message={error} type="error" />}</>;
}
