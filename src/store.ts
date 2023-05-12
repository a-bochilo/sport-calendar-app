// ========================== redux ==========================
import { configureStore } from "@reduxjs/toolkit";

// ========================== store ==========================
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// =========================== slices ===========================
import date from "./app/layout/store/date.slice";

const store = configureStore({
  reducer: {
    date,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
