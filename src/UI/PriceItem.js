import { useSelector } from "react-redux";
import { getPriceSelector } from "../store/selectors";
import moment from "moment";

const PriceItem = ({ price }) => {
  const getPrice = useSelector((state) => getPriceSelector(state, price));

  return (
    <div className="w-full flex justify-between p-2">
      <div>
        <span className="px-2">{getPrice.price}</span>{" "}
        <span className="px-2 text-xs text-gray-400 italic">
          {moment(getPrice.date, "YYYYMMDD").fromNow()}
        </span>
      </div>
    </div>
  );
};

export default PriceItem;
