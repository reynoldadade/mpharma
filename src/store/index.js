import { createStore } from "redux";

const reducer = (state, action) => {
  // action getProductList
  if (action.type === "ADD_PRODUCT") {
    return {
      products: state.products.concat(action.payload),
    };
  }

  //action getPriceList
  if (action.type === "ADD_PRICE") {
    return {
      prices: state.prices.concat(action.payload),
    };
  }

  // action GET_PRODUCT
  if (action.type === "GET_PRODUCTS_BY_ID") {
    return {
      products: state.products.filter(
        (product) => product.id === action.payload
      ),
    };
  }

  //action GET_PRICE
  if (action.type === "GET_PRICE_BY_ID") {
    return {
      prices: state.prices.filter((price) => price.id === action.payload),
    };
  }

  return state;
};
const store = createStore(reducer);

export default store;
