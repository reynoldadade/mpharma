import { useState } from "react";

const AddProductForm = ({ buttonText, submitMethod, closeModal }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  // create handlers for input fields
  const handleProductName = (e) => {
    setProductName(e.target.value);
  };
  const handleProductPrice = (e) => {
    setProductPrice(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const productData = { name: productName, price: productPrice };
    submitMethod(productData);
    closeModal();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="p-2">
        <label htmlFor="productName" className=" font-medium">
          Product
        </label>
        <input
          type="text"
          name="product"
          id="productName"
          className="rounded p-2 w-full border"
          required
          minLength={3}
          onInput={handleProductName}
          value={productName}
        />
      </div>
      <div className="p-2">
        <label htmlFor="price" className="w-full font-medium">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="rounded p-2 w-full border"
          required
          onInput={handleProductPrice}
          value={productPrice}
        />
      </div>
      <div className="mt-4 p-4">
        <button
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
