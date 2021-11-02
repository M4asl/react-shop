import axios from "axios";
import {
  GET_ALL_CATEGORY,
  CATEGORY_LOADING,
} from "../constants/categoryConstants";

const getAllCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LOADING, payload: true });

    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    dispatch({ type: GET_ALL_CATEGORY, payload: data });

    dispatch({ type: CATEGORY_LOADING, payload: false });
  } catch (err) {
    console.log(err);
  }
};

export { getAllCategory };
