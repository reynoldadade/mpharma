import PriceItem from "./PriceItem";

const PriceList = ({ prices }) => {
  return (
    <div>
      {prices.map((price) => (
        <PriceItem key={price} price={price} />
      ))}
    </div>
  );
};

export default PriceList;
