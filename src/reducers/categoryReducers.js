import {
  GET_ALL_CATEGORY,
  CATEGORY_LOADING,
} from "../constants/categoryConstants";

const initialState = {
  loading: false,
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
