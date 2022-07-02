import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import classSlice from "../reducers/class";
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    class: classSlice,
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(logger)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;