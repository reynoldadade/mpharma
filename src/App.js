import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./UI/ProductList";

function App() {
  //products state
  const [products, setProducts] = useState([]);
  /// for loading
  const [isLoading, setIsLoading] = useState(true);

  //get products from the api
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://www.mocky.io/v2/5c3e15e63500006e003e9795"
      );

      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function callAPI() {
      const products = await getProducts();
      setIsLoading(false);
      setProducts(products);
    }

    callAPI();
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading ...</p>}
      {!isLoading && products.length > 0 && <ProductList products={products} />}
      {!isLoading && products.length === 0 && <p>No products found</p>}
    </div>
  );
}

export default App;
