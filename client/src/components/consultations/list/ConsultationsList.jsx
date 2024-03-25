import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { consultationsSearch } from "../../../services/store/slices/consultationsSlice";
import ConsultationsError from "../common/error/ConsultationsError";
import ConsultationsLoading from "../common/loading/ConsultationsLoading";
import ConsultationsListUI from "./ConsultationsListUI";

const ConsultationList = ({ patientId }) => {
    const searchConsultations = useSelector(
        (state) => state.consultations?.search
    );
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("ConsultationList: useEffect: patientId: ", patientId);
        getConsultations(patientId);
    }, [dispatch, patientId]);
    // handle data
    useEffect(() => {
        if (searchConsultations?.data) {
            console.log("searchConsultations.data: ", searchConsultations.data);
            setData(searchConsultations.data);
        } else {
            console.log("no data");
            setData(null);
        }
    }, [searchConsultations]);

    // handle loading
    useEffect(() => {
        if (searchConsultations?.loading) setLoading(true);
        else setLoading(false);
    }, [searchConsultations]);

    // handle error
    useEffect(() => {
        if (searchConsultations?.error) setError(searchConsultations?.error);
        else setError(null);
    }, [searchConsultations]);

    const getConsultations = (patientId) => {
        let query = null;
        if (patientId) query = { field: "patient", value: patientId };
        console.log("ConsultationList: getConsultations: query: ", query);
        dispatch(consultationsSearch({ query }));
    };

    return (
        <div>
            <ConsultationsLoading loading={loading && !data} />
            <ConsultationsError error={error} />
            <ConsultationsListUI consultations={data} />
        </div>
    );
};

export default ConsultationList;
