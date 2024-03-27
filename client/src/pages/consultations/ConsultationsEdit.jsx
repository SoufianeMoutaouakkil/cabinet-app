import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ConsultationsLoading from "../../components/consultations/common/loading/ConsultationsLoading";
import ConsultationsError from "../../components/consultations/common/error/ConsultationsError";

import {
    consultationsUpdate,
    consultationsGetById,
} from "../../services/store/slices/consultationsSlice";
import ConsultationEdit from "../../components/consultations/edit/ConsultationEdit";

const ConsultationsEdit = () => {
    const id = useParams().id;
    const consultationById = useSelector(
        (state) => state.consultations?.getById
    );
    const consultationUpdateState = useSelector(
        (state) => state.consultations?.update
    );
    const dispatch = useDispatch();
    const [consultation, setConsultation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        dispatch(consultationsGetById({ id }));
    }, [dispatch, id]);

    useEffect(() => {
        if (consultationById?.data) setConsultation(consultationById.data);
        else setConsultation(null);

        if (consultationById?.loading) setLoading(true);
        else setLoading(false);

        if (consultationById?.error) setError(consultationById.error);
        else setError(null);
    }, [consultationById]);

    useEffect(() => {
        // if (consultationUpdateState?.data) {
        //     navigate(`/consultations/${id}`);
        // }

        if (consultationUpdateState?.error) {
            setError(consultationUpdateState.error);
        }

        if (consultationUpdateState?.loading) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [consultationUpdateState]);

    const onUpdate = (data) => {
        dispatch(consultationsUpdate({ id, data }));
        dispatch(consultationsGetById({ id }));
    };

    return (
        <div>
            {loading && (
                <ConsultationsLoading loading={loading && !consultation} />
            )}
            {error && <ConsultationsError error={error} />}
            {consultation && (
                <ConsultationEdit
                    consultation={consultation}
                    onUpdate={onUpdate}
                    loading={loading}
                />
            )}
        </div>
    );
};

export default ConsultationsEdit;
