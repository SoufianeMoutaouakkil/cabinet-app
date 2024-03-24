import { useNavigate } from "react-router-dom";
import { logout } from "../../services/store/slices/authSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(logout());
        navigate("/login");
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
