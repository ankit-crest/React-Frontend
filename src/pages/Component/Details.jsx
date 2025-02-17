import { Provider, useSelector } from "react-redux";
import DetailsChild from "./DetailsChild";
import { StoreManage } from "../../storage/StoreManage";
import { DecreesActionStore } from "../../storage/DecreesActionStore";

const Details = () => {
  const getUser = () => {
    console.log("hhhh");
  };
  return (
    <div className="">
      <Provider store={DecreesActionStore}>
        <DetailsChild />
      </Provider>
    </div>
  );
};

export default Details;
