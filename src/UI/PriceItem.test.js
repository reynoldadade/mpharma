import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import PriceItem from "./PriceItem";

describe("PriceItem", () => {
  const price = 1;

  const preloadedState = {
    prices: {
      1: {
        id: 1,
        price: 20,
        date: "2020-01-01T00:00:00.000Z",
      },
      2: {
        id: 2,
        price: 2,
        date: "2020-01-02T00:00:00.000Z",
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

  test("Price item should display price", () => {
    render(<PriceItem price={price} />, { preloadedState });
    const priceSpan = screen.getByTestId("priceSpan");
    expect(priceSpan).toBeInTheDocument();

    expect(priceSpan.textContent).toContain("20");
  });
});
