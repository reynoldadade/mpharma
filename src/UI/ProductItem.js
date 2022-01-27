import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { getLatestPrice } from "../store/selectors";
import { useState } from "react";
import PriceList from "./PriceList";
import MenuItem from "./MenuItem";
import Modal from "./Modal";
import UpdateProductNameForm from "./UpdateProductNameForm";
import UpdateProductPriceForm from "./UpdateProductPriceForm";
//import acitons
import { actions } from "../store/index";
const ProductList = ({ product }) => {
  //setup modal flags
  const [isNameFormOpen, setIsNameFormOpen] = useState(false);
  const [isPriceFormOpen, setIsPriceFormOpen] = useState(false);

  const openUpdateNameForm = () => {
    setIsNameFormOpen(true);
  };
  const closeUpdateNameForm = () => {
    setIsNameFormOpen(false);
  };
  const openUpdatePriceForm = () => {
    setIsPriceFormOpen(true);
  };

  const closeUpdatePriceForm = () => {
    setIsPriceFormOpen(false);
  };

  const latestPrice = useSelector((state) =>
    getLatestPrice(state, product.prices)
  );

  const dispatch = useDispatch();

  //delete Product
  const handleDeleteProduct = (productId) => {
    //delete product from store
    dispatch(actions.deleteProduct(productId));
  };

  const updateProductNameHandler = (product) => {
    //update product name
    dispatch(actions.updateProductName(product));
  };

  const updatePriceHandler = (product) => {
    dispatch(actions.updateProductPrice(product));
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-1">
            <span data-testid="productName">
              {product.name} -{" "}
              <span className="font-bold">{latestPrice.price}</span>
            </span>

            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition-all duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition-all duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex justify-between">
              <div>
                <div className="font-semibold text-xs text-gray-500">
                  Historical Prices{" "}
                </div>
                <PriceList prices={product.prices} />
              </div>
              <MenuItem
                deleteProduct={handleDeleteProduct}
                productId={product.id}
                openUpdateNameForm={openUpdateNameForm}
                openUpdatePriceForm={openUpdatePriceForm}
              />
            </Disclosure.Panel>
          </Transition>
          <Modal
            isOpen={isNameFormOpen}
            title={"Update Name"}
            closeModal={closeUpdateNameForm}
          >
            <UpdateProductNameForm
              buttonText={"update"}
              submitMethod={updateProductNameHandler}
              closeModal={closeUpdateNameForm}
              id={product.id}
            />
          </Modal>
          <Modal
            isOpen={isPriceFormOpen}
            title={"Set New Price"}
            closeModal={closeUpdatePriceForm}
          >
            <UpdateProductPriceForm
              buttonText={"update"}
              submitMethod={updatePriceHandler}
              closeModal={closeUpdatePriceForm}
              id={product.id}
            />
          </Modal>
        </>
      )}
    </Disclosure>
  );
};

export default ProductList;
