import { normalize, schema, denormalize } from "normalizr";

export function normalizeProduct(products) {
  const priceSchema = new schema.Entity("prices", {});
  const productSchema = new schema.Entity("products", {
    prices: [priceSchema],
  });
  const normalizedData = normalize(products, [productSchema]);
  return normalizedData;
}

export function denormalizeProduct(productsEntity) {
  // create product schema

  const productSchema = new schema.Entity("products");
  const result = Object.keys(productsEntity);

  const denormalizedProduct = denormalize(
    { products: result },
    { products: [productSchema] },
    { products: productsEntity }
  );
  return denormalizedProduct;
}
