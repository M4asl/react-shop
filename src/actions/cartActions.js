import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const addToCart = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    const { title, image, price } = data;

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        title,
        image,
        price,
        date: Date.now(),
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartReducer.cartItems)
    );
  } catch (err) {
    console.log(err);
  }
};

const removeFromCart = (date) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: date,
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export { addToCart, removeFromCart };
