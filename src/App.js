import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./UI/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";
import { getProductsSelector } from "./store/selectors";

function App() {
  /// for loading
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // products selector
  const getProduct = useSelector(getProductsSelector);

  const getPrice = useSelector((state) => state.prices);

  //handle response from axios call

  // call handler on mount
  useEffect(() => {
    if (
      getProduct.products.length === 0 &&
      Object.keys(getPrice).length === 0
    ) {
      async function getProductsHandler() {
        try {
          const response = await axios.get(
            "http://www.mocky.io/v2/5c3e15e63500006e003e9795"
          );

          dispatch(actions.addProducts(response.data.products));
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          // console.log(error);
          return false;
        }
      }

      getProductsHandler();
    } else {
      setIsLoading(false);
    }

    return () => {
      setIsLoading(false);
    };
  }, [getProduct.products.length, getPrice, dispatch]);

  return (
    <div className="md:p-40 p-10" data-testid="page-content">
      {isLoading && <p>Loading ...</p>}

      {!isLoading && getProduct.products.length > 0 && (
        <ProductList products={getProduct.products} />
      )}
      {!isLoading && getProduct.products.length === 0 && (
        <p data-testid="no-product-div">No products found</p>
      )}
    </div>
  );
}

export default App;
