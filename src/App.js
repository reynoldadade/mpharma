import "./App.css";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductList from "./UI/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";
import { getPriceSelector, getProductsSelector } from "./store/selectors";

function App() {
  /// for loading
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // products selector
  const getProduct = useSelector(getProductsSelector);

  //make axios call
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://www.mocky.io/v2/5c3e15e63500006e003e9795"
      );

      return response.data.products;
    } catch (error) {
      return false;
    }
  };
  //handle response from axios call

  const getProductsHandler = useCallback(async () => {
    const products = await getProducts();
    if (products) {
      //save products to store
      dispatch(actions.addProducts(products));
    }
    setIsLoading(false);
  }, [dispatch]);

  // call handler on mount
  useEffect(() => {
    getProductsHandler();
  }, [getProductsHandler]);

  return (
    <div className="App">
      {isLoading && <p>Loading ...</p>}

      {!isLoading && getProduct.products.length > 0 && (
        <ProductList products={getProduct.products} />
      )}
      {!isLoading && getProduct.products.length === 0 && (
        <p>No products found</p>
      )}
    </div>
  );
}

export default App;
