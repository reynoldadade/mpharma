import { createSelector } from "@reduxjs/toolkit";
import { denormalizeProduct } from "./normalizr.js";

const productSelector = (state) => state.products;
const priceSelector = (state) => state.prices;

export const getProductsSelector = createSelector(
  [productSelector],
  (product) => denormalizeProduct(product)
);

export const getPriceSelector = createSelector(
  [priceSelector, (state, id) => id],
  (prices, id) => prices[id]
);

//sort prices into latest date and select first index
export const getLatestPrice = createSelector(
  [priceSelector, (state, priceList) => priceList],
  (prices, priceList) => {
    //sort prices by date in descending order

    const [latestPrice] = priceList
      .map((id) => prices[id])
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return latestPrice;
  }
);
