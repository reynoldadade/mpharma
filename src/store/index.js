import { createSlice, configureStore } from "@reduxjs/toolkit";
import { normalizeProduct } from "./normalizr.js";
import moment from "moment";
import { loadState, saveState } from "./localStorage.js";

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
    updateProductName: (state, action) => {
      // access product by id and update name
      state.products[action.payload.id].name = action.payload.name;
      //
    },

    updateProductPrice: (state, action) => {
      // add price to prices object

      //find highest price id
      const highestPriceId = Math.max(...Object.keys(state.prices));
      const newPriceId = highestPriceId + 1;
      //updated prices object
      state.prices[newPriceId] = {
        id: newPriceId,
        price: action.payload.price,
        date: moment().format(),
      };
      //update product object
      state.products[action.payload.id].prices.push(newPriceId);
    },

    //delete product
    deleteProduct: (state, action) => {
      //delete product from products object
      delete state.products[action.payload];
    },
    //add a product
    addProduct: (state, action) => {
      // add product to products object
      const newProductId = Math.max(...Object.keys(state.products)) + 1;
      state.products[newProductId] = {
        id: newProductId,
        name: action.payload.name,
      };
      //find highest price id
      const highestPriceId = Math.max(...Object.keys(state.prices));
      //add price id to product object
      state.products[newProductId].prices = [highestPriceId + 1];
      //update prices object
      state.prices[highestPriceId + 1] = {
        id: highestPriceId + 1,
        price: action.payload.price,
        date: moment().format(),
      };
    },
  },
});
//persisted state loaded if it exists
const persistedState = loadState();

//create store
const store = configureStore(
  {
    reducer: productsSlice.reducer,
    preloadedState: persistedState,
    /* preloadedState, */
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
// export product actions
export const { actions, reducer } = productsSlice;
export default store;
