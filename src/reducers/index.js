import { combineReducers } from "redux";
import productReducer from "./productReducers";
import categoryReducer from "./categoryReducers";
import cartReducer from "./cartReducers";

const reducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
});

export default reducer;
