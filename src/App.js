import "./App.css";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductList from "./UI/ProductList";
import { normalizeProduct, denormalizeProduct } from "./store/normalizr";

function App() {
  //products state
  const [products, setProducts] = useState([]);
  /// for loading
  const [isLoading, setIsLoading] = useState(true);

  //make axios call
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://www.mocky.io/v2/5c3e15e63500006e003e9795"
      );
      console.log(response.data.products);

      return response.data.products;
    } catch (error) {
      return false;
    }
  };
  //handle response from axios call

  const getProductsHandler = useCallback(async () => {
    const products = await getProducts();
    if (products) {
      setProducts(products);
      const response = normalizeProduct(products);
      console.log(response);

      console.log(
        denormalizeProduct(response.result, response.entities.products)
      );
    }
    setIsLoading(false);
  }, []);

  // call handler on mount
  useEffect(() => {
    getProductsHandler();
  }, [getProductsHandler]);

  return (
    <div className="App">
      {isLoading && <p>Loading ...</p>}
      {!isLoading && products.length > 0 && <ProductList products={products} />}
      {!isLoading && products.length === 0 && <p>No products found</p>}
    </div>
  );
}

export default App;
