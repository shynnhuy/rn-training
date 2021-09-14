import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
} from "./store.constants";

const initlaState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

export const storeReducer = (state = initlaState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS.PENDING:
      return { ...state, loading: true };
    case FETCH_PRODUCTS.SUCCESS:
      return { ...state, loading: false, products: payload };
    case FETCH_PRODUCTS.ERROR:
      return { ...state, loading: false, error: payload };

    case ADD_TO_CART: {
      const isItemInCart = state.cart.find((item) => item.id === payload.id);

      if (isItemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...payload, amount: 1 }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export const selectCartCount = (state) =>
  state.cart.reduce((acc, cur) => acc + cur.amount, 0);
