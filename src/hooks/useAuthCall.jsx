import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (userInfo) => {
    const BASE_URL = "https://12182.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      navigate("/stock");
      console.log(data);
      return data;
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login };
};

export default useAuthCall;
