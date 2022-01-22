//create ProductListItem

const ProductList = ({ product }) => {
  return (
    <div className="p-4 border border-black flex justify-between mb-1 rounded bg-gray-100 hover:bg-gray-200 shadow">
      <div>{product.name}</div>
      <div>
        <button>
          <span className="text-red-500">
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
