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
