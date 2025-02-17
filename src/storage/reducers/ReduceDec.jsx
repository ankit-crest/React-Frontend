import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  name: "counter",
};

const ReduceDec = createSlice({
  name: "ReduceSlice",
  initialState: initialState,
  reducers: {
    DecreesAction: (state, action) => {
      console.log("----", action.payload + 1);

      state.counter = action.payload + 1;
    },
  },
});

export const { DecreesAction } = ReduceDec.actions;

export default ReduceDec.reducer;
