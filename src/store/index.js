import { createSlice, configureStore } from "@reduxjs/toolkit";
import { normalizeProduct } from "./normalizr.js";

// initialize state
const initialState = {
  products: {},
  prices: {},
};

//create a slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const response = normalizeProduct(action.payload);
      state.products = response.entities.products;
      state.prices = response.entities.prices;
    },
  },
});

//create store
const store = configureStore(
  {
    reducer: productsSlice.reducer,
    /* preloadedState, */
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export product actions
export const { actions } = productsSlice;
export default store;
