import { configureStore } from "@reduxjs/toolkit";
import ReduceDec from "./reducers/ReduceDec";

export const DecreesActionStore = configureStore({
  reducer: {
    decreesAction: ReduceDec,
  },
});

console.log("000", DecreesActionStore.getState());
