//create ProductListItem

const ProductList = ({ product }) => {
  return (
    <div className="p-4 border border-black flex">
      <div>{product.name}</div>
      {/* <div>{product.prices}</div> */}
    </div>
  );
};

export default ProductList;
