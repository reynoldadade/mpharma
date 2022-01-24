import { Fragment } from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ products }) => {
  return (
    <div className="">
      <div className="py-2">
        <button className="rounded shadow text-purple-900 p-2 bg-purple-100 hover:bg-purple-200">
          Add Product{" "}
          <span>
            <i className="fas fa-plus"></i>
          </span>
        </button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
