import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} Successfuly deleted.`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} Successfuly Added.`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} Successfuly Updated.`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;
