import { Fragment } from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ products }) => {
  return (
    <Fragment>
      <div className="py-2">
        <button className="rounded shadow bg-green-500 p-2 text-white hover:bg-green-600">
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
    </Fragment>
  );
};

export default ProductList;
