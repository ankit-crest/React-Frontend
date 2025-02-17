import { configureStore } from "@reduxjs/toolkit";
import StoreDetails, { getDetails } from "./StoreDetails";

export const StoreDetailsStore = configureStore({
  reducer: {
    getDetails: StoreDetails.reducer,
  },
});
