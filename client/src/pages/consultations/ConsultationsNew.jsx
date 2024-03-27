import { useDispatch, useSelector } from "react-redux";
import { consultationsCreate } from "../../services/store/slices/consultationsSlice";
import ConsultationsError from "../../components/consultations/common/error/ConsultationsError";
import ConsultationsLoading from "../../components/consultations/common/loading/ConsultationsLoading";
import ConsultationsNewComponent from "../../components/consultations/new/ConsultationsNew";

const ConsultationsNew = () => {
    const consultation = useSelector((state) => state.consultations?.create);
    const dispatch = useDispatch();

    const onCreate = (data) => {
        dispatch(consultationsCreate({ data }));
    };

    return (
        <div>
            <ConsultationsLoading loading={consultation?.loading} />
            <ConsultationsError error={consultation?.error} />
            <ConsultationsNewComponent onCreate={onCreate} />
        </div>
    );
};

export default ConsultationsNew;
