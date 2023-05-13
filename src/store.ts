// ========================== redux ==========================
import { configureStore } from "@reduxjs/toolkit";

// ========================== store ==========================
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// =========================== slices ===========================
import date from "./app/layout/store/date.slice";
import training from "./app/pages/training/store/training.slice";

const store = configureStore({
  reducer: {
    date,
    training,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
