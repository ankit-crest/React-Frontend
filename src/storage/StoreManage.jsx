import { configureStore } from "@reduxjs/toolkit";
import ReducersSlice from "./reducers/ReducersSlice";

export const StoreManage = configureStore({
  reducer: {
    storeReducer: ReducersSlice.reducer,
  },
});
