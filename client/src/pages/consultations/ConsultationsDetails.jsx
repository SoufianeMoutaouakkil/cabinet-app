import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { consultationsGetById } from "../../services/store/slices/consultationsSlice";
import { useEffect, useState } from "react";
import ConsultationsLoading from "../../components/consultations/common/loading/ConsultationsLoading";
import ConsultationsError from "../../components/consultations/common/error/ConsultationsError";
import ConsultationDetails from "../../components/consultations/details/ConsultationDetails";
const ConsultationsDetails = () => {
    const [searchParams] = useSearchParams();
    const patientId = searchParams.get("patientId");

    const navigate = useNavigate();
    const id = useParams().id;

    const user = useSelector((state) => state.auth?.authData?.user);
    const consultationById = useSelector(
        (state) => state.consultations?.getById
    );
    const dispatch = useDispatch();
    const [consultation, setConsultation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getConsultationById();
    }, [dispatch, id]);

    useEffect(() => {
        if (consultationById?.data) setConsultation(consultationById.data);
        else setConsultation(null);

        if (consultationById?.loading) setLoading(true);
        else setLoading(false);

        if (consultationById?.error) setError(consultationById.error);
        else setError(null);

        console.log(
            "ConsultationsDetails.jsx: useEffect: consultationById: ",
            consultationById
        );
    }, [consultationById]);

    const getConsultationById = () => {
        dispatch(consultationsGetById({ id }));
    };

    const onEdit = (id) => {
        navigate(`/consultations/${id}/edit?patientId=${patientId}`);
    };

    const onBack = () => {
        if (patientId) navigate(`/patients/${patientId}`);
        else navigate(`/consultations`);
    };

    return (
        <div>
            <h1>Consultation Details</h1>
            <button onClick={onBack}>Back</button>
            {loading && (
                <ConsultationsLoading loading={loading && !consultation} />
            )}
            {error && <ConsultationsError error={error} />}
            {consultation && (
                <>
                    <ConsultationDetails
                        user={user}
                        consultation={consultation}
                        onEdit={onEdit}
                    />
                </>
            )}
        </div>
    );
};

export default ConsultationsDetails;
