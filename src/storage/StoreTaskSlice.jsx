import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  created: "",
};

const taskSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    setSliceAuth: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.created_at = action.payload.created_at;
    },
  },
});

export const { setSliceAuth } = taskSlice.actions;

export const StoreTaskSlice = configureStore({
  reducer: {
    setAuth: taskSlice.reducer,
  },
});
