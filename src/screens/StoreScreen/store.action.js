import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
} from "./store.constants";

export const fetchProducts =
  () =>
  async (dispatch, getState, { api }) => {
    if (getState().store?.products?.length > 0) {
      return;
    }
    try {
      dispatch({ type: FETCH_PRODUCTS.PENDING });
      const { data } = await api.get("/products");
      dispatch({ type: FETCH_PRODUCTS.SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS.ERROR, payload: error });
    }
  };

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
