import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  GET_SPECIFIC_PRODUCTS_BY_CATEGORY,
  PRODUCT_LOADING,
} from "../constants/productConstants";

const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LOADING, payload: true });

    const { data } = await axios.get("https://fakestoreapi.com/products");

    dispatch({ type: GET_ALL_PRODUCTS, payload: data });

    dispatch({ type: PRODUCT_LOADING, payload: false });
  } catch (err) {
    console.log(err);
  }
};

const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LOADING, payload: true });

    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    dispatch({ type: GET_PRODUCT, payload: data });

    dispatch({ type: PRODUCT_LOADING, payload: false });
  } catch (err) {
    console.log(err);
  }
};

const getProductsBySpecificCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LOADING, payload: true });

    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );

    dispatch({ type: GET_SPECIFIC_PRODUCTS_BY_CATEGORY, payload: data });

    dispatch({ type: PRODUCT_LOADING, payload: false });
  } catch (err) {
    console.log(err);
  }
};

export { getAllProducts, getProduct, getProductsBySpecificCategory };
