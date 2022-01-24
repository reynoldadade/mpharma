import ProductItem from "./ProductItem";
import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { actions } from "../store/index";

const ProductList = ({ products }) => {
  //create state for modal
  const [isOpen, setIsOpen] = useState(false);
  const title = "Add a new product";
  const buttonText = "Add";
  //set up dispatch

  const dispatch = useDispatch();

  //handle add product
  const handleAddProduct = (product) => {
    //add product to store
    dispatch(actions.addProduct(product));
  };

  //create state handler for modal
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const closeModalHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
      <div className="py-2">
        <button
          className="rounded shadow text-purple-900 p-2 bg-purple-100 hover:bg-purple-200"
          onClick={handleModal}
        >
          Add Product{" "}
          <span>
            <i className="fas fa-plus"></i>
          </span>
        </button>
        <Modal
          isOpen={isOpen}
          title={title}
          buttonText={buttonText}
          closeModal={closeModalHandler}
          submitMethod={handleAddProduct}
        />
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
