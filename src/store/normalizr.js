import { normalize, schema, denormalize } from "normalizr";

export function normalizeProduct(products) {
  const priceSchema = new schema.Entity("prices", {});
  const productSchema = new schema.Entity("products", {
    prices: [priceSchema],
  });
  const normalizedData = normalize(products, [productSchema]);
  return normalizedData;
}

export function denormalizeProduct(result, productsEntity) {
  // create product schema

  const productSchema = new schema.Entity("products");

  const denormalizedProduct = denormalize(
    { products: result },
    { products: [productSchema] },
    { products: productsEntity }
  );
  return denormalizedProduct;
}
