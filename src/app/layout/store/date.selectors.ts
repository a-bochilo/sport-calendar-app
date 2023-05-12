import { RootState } from "../../../store";

export const dateSelector = (state: RootState) => state.date.chosenDate;
