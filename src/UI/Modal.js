import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal({
  isOpen,
  title,
  closeModal,
  buttonText,
  submitMethod,
}) {
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
    submitMethod({ name: productName, price: productPrice });
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-purple-100 opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-purple-900"
              >
                {title}
              </Dialog.Title>
              <div className="mt-2 w-full p-2">
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
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
