import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import classSlice from "../reducers/class";

export const store = configureStore({
  reducer: {
    class: classSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;