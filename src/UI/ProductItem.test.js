import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import ProductItem from "./ProductItem";

describe("ProductItem", () => {
  const product = {
    id: 1,
    name: "Product 1",
    prices: [1, 2],
  };

  const preloadedState = {
    prices: {
      1: {
        id: 1,
        price: 1,
        date: "2020-01-01T00:00:00.000Z",
      },
    },
    products: {
      1: {
        id: 1,
        name: "Product 1",
        prices: [1, 2],
      },
    },
  };

  test("Product item should display product name", () => {
    render(<ProductItem product={product} />, { preloadedState });
    const productNameSpan = screen.getByTestId("productName");
    expect(productNameSpan).toBeInTheDocument();
    productNameSpan.textContent.includes(product.name);
  });
});
