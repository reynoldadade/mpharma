import App from "./App";
import React from "react";
import { render, screen, cleanup } from "./test-utils";
// import axios from "axios";

// jest.mock("axios");

const preloadedState = {
  products: {},
  prices: {},
};
beforeEach(() => {
  localStorage.clear();
});
afterEach(() => {
  localStorage.clear();
});
describe("App", () => {
  test("page should show loading", () => {
    render(<App />);
    const pageContent = screen.getByTestId("page-content");
    expect(pageContent).toBeInTheDocument();
    expect(pageContent.textContent).toContain("Loading ...");
    cleanup();
  });

  describe("When loading is done", () => {
    // const product = [
    //   {
    //     id: 1,
    //     name: "Product 1",
    //     prices: [{ id: 1, price: 1, date: "2020-01-01T00:00:00.000Z" }],
    //   },
    // ];

    it("shows list of products", async () => {
      //mock api call with msw

      render(<App />, { preloadedState });
      const productsNode = await screen.findByTestId("product-div");
      expect(productsNode).toBeInTheDocument();
    });
  });
});
