import { Menu, Transition } from "@headlessui/react";
import {
  PencilIcon,
  DotsVerticalIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { Fragment } from "react";

function MyDropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100  rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <div>
          {" "}
          <DotsVerticalIcon className="h-5 w-5" />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <button
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-purple-100"
              onClick={props.openUpdateNameForm}
            >
              <PencilIcon
                className="w-5 h-5 mr-2 text-purple-900"
                aria-hidden="true"
              />{" "}
              Edit
              <span> Name</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-purple-100"
              onClick={props.openUpdatePriceForm}
            >
              <PencilIcon
                className="w-5 h-5 mr-2 text-purple-900"
                aria-hidden="true"
              />
              <span> Edit Price</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-purple-100"
              onClick={() => props.deleteProduct(props.productId)}
            >
              <TrashIcon
                className="w-5 h-5 mr-2 text-red-500"
                aria-hidden="true"
              />
              <span> Delete Product</span>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MyDropdown;
