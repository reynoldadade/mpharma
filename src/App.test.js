import App from "./App";
import React from "react";
import { render, screen, waitFor } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get(
    "http://www.mocky.io/v2/5c3e15e63500006e003e9795",
    (req, res, ctx) => {
      return res(
        ctx.json({
          products: [
            {
              id: 1,
              name: "Exforge 10mg",
              prices: [
                {
                  id: 1,
                  price: 10.99,
                  date: "2019-01-01T17:16:32+00:00",
                },
                {
                  id: 2,
                  price: 9.2,
                  date: "2018-11-01T17:16:32+00:00",
                },
              ],
            },
          ],
        }),
        ctx.delay(150)
      );
    }
  ),
];
describe("App", () => {
  //   test("page should show loading", () => {
  //     render(<App />);
  //     const pageContent = screen.getByTestId("page-content");
  //     expect(pageContent).toBeInTheDocument();
  //     expect(pageContent.textContent).toContain("Loading ...");
  //   });

  describe("Products", () => {
    // const server = setupServer(...handlers);

    // // Enable API mocking before tests.
    // beforeAll(() => {
    //   server.listen();
    // });

    // beforeEach(() => {
    //   localStorage.clear();
    // });

    // // Reset any runtime request handlers we may add during the tests.
    // afterEach(() => server.resetHandlers());

    // // Disable API mocking after the tests are done.
    // afterAll(() => server.close());

    afterEach(() => localStorage.clear());

    const preloadedState = {
      products: {},
      prices: {},
    };
    test("page should show no products found", () => {
      render(<App />, { preloadedState });

      const pageContent = screen.getByTestId("page-content");
      expect(pageContent).toBeInTheDocument();

      expect(pageContent.textContent).toContain("No products found");
    });
    test("page should show list of products", async () => {
      render(<App />);

      const pageContent = screen.getByTestId("page-content");
      expect(pageContent).toBeInTheDocument();

      expect(pageContent.textContent).toContain("No products found");
    });
  });
});
