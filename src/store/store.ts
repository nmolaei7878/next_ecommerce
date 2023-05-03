import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/card-slice";

const reducer = {
  card: cardSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
