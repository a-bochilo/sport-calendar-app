// ========================== redux ==========================
import { configureStore } from "@reduxjs/toolkit";

// ========================== store ==========================
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// =========================== slices ===========================
import date from "./app/layout/store/date.slice";
import training from "./app/training/store/training.slice";
import exercise from "./app/exercise/store/exercise.slice";
import forecast from "./app/forecast/store/forecast.slice";

const store = configureStore({
  reducer: {
    date,
    training,
    exercise,
    forecast,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
