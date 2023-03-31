import { useDispatch } from "react-redux";
import {
  fetchStart,
  getSuccess,
  fetchFail,
  getProductCategoryBrandSuccess,
} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
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

  const getProductCategoryBrand = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken.get("stock/products/"),
        axiosWithToken.get("stock/categories/"),
        axiosWithToken.get("stock/brands/"),
      ]);
      dispatch(
        getProductCategoryBrandSuccess([
          products?.data,
          categories?.data,
          brands?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data can not be fetched");
    }
  };
  return {
    getStockData,
    deleteStockData,
    postStockData,
    putStockData,
    getProductCategoryBrand,
  };
};

export default useStockCall;
