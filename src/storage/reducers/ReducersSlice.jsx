import { createSlice } from "@reduxjs/toolkit";


export const initialState = { counter: 0 };

const ReducersSlice = createSlice({
  name: "CounterSlice",
  initialState: initialState,
  reducers: {
    incrementAction: (state, action) => {
      state.counter = action.payload + 1;

      //
    },
  },
});

export const { incrementAction } = ReducersSlice.actions;

export default ReducersSlice;
