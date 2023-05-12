import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ===================== dayjs =====================
import dayjs, { Dayjs } from "dayjs";

// ===================== interface =====================
import { IDateState } from "./date-state.interface";

const initialState: IDateState = {
  chosenDate: dayjs().valueOf(),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<number>) => {
      state.chosenDate = action.payload;
    },
  },
});

const { actions, reducer } = dateSlice;

export default reducer;

export const { setDate } = actions;
