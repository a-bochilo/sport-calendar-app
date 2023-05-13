import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ===================== dayjs =====================
import dayjs from "dayjs";

// ===================== interface =====================
import { IDateState } from "./date-state.interface";

const initialState: IDateState = {
  chosenDate: dayjs().format("DD-MM-YYYY"),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.chosenDate = action.payload;
    },
  },
});

const { actions, reducer } = dateSlice;

export default reducer;

export const { setDate } = actions;
