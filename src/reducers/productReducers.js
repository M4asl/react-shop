import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  GET_SPECIFIC_PRODUCTS_BY_CATEGORY,
  PRODUCT_LOADING,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  products: [],
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_SPECIFIC_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
