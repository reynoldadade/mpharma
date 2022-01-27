import App from "./App";
import React from "react";
import { render, screen, waitForElement, cleanup } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get(
    "http://www.mocky.io/v2/5c3e15e63500006e003e9795",
    (req, res, ctx) => {
      return res(
        ctx.json({
          products: [
            // {
            //   id: 1,
            //   name: "Exforge 10mg",
            //   prices: [
            //     {
            //       id: 1,
            //       price: 10.99,
            //       date: "2019-01-01T17:16:32+00:00",
            //     },
            //     {
            //       id: 2,
            //       price: 9.2,
            //       date: "2018-11-01T17:16:32+00:00",
            //     },
            //   ],
            // },
          ],
        }),
        ctx.delay(150)
      );
    }
  ),
];

const preloadedState = {
  products: {},
  prices: {},
};

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
    it("shows list of products", async () => {
      //mock api call with msw

      render(<App />, { preloadedState });
      const productsNode = await screen.findByTestId("product-div");
      expect(productsNode).toBeInTheDocument();
    });
  });
});
