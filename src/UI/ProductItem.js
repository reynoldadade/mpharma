import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { getLatestPrice } from "../store/selectors";
import PriceList from "./PriceList";
//import acitons
import { actions } from "../store/index";
const ProductList = ({ product }) => {
  const latestPrice = useSelector((state) =>
    getLatestPrice(state, product.prices)
  );

  const dispatch = useDispatch();

  //delete Product
  const handleDeleteProduct = (productId) => {
    //delete product from store
    dispatch(actions.deleteProduct(productId));
  };
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-1">
            <span>
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
              <div>
                <button
                  className="rounded-full bg-red-100 hover:bg-red-200 p-1 mx-1"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <TrashIcon className="w-5 h-5 text-red-500" />
                </button>
                <button className="rounded-full bg-purple-100 hover:bg-purple-200 p-1 mx-1">
                  <PencilIcon className="w-5 h-5 text-purple-900" />
                </button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default ProductList;
