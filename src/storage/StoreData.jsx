import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  created_at: "",
};

export const taskSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      console.log(action);
      state.id = action.id;
      state.name = action.name;
      state.email = action.email;
      state.created_at = action.created_at;
    },
  },
});

export const { setAuthUser } = taskSlice.actions;

export const StoreData = configureStore({
  reducer: {
    authUser: taskSlice.reducer,
  },
});

console.log(StoreData.getState());
