import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecreesAction } from "../../storage/reducers/ReduceDec";

const DetailsChild = () => {
  const DecreesStoreData = useSelector((state) => state.decreesAction);

  const dispatch = useDispatch();

  console.log(DecreesStoreData);

  const increment = (e) => {
    dispatch(DecreesAction(DecreesStoreData.counter));
    console.log(e);
  };

  return (
    <div className="">
      <h2>{DecreesStoreData.counter}</h2>
      <button onClick={increment}>Increment </button>
    </div>
  );
};

export default DetailsChild;
