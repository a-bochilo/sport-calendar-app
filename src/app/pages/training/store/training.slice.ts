import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITrainingState } from "./trainingState.interface";
import { ITraining } from "../../../../types/training.types";

const initialState: ITrainingState = {
  trainingList: null,
  dayTrainingList: null,
  chosenTraining: null,
  nextId: 0,
};

const trainingSlice = createSlice({
  name: "training",
  initialState,
  reducers: {
    getAllTraining: (state) => {
      const trainingStateFromLS = window.localStorage.getItem("training");
      if (!trainingStateFromLS) return;
      const trainingState = JSON.parse(trainingStateFromLS) as Omit<
        ITrainingState,
        "dayTraining"
      >;
      state.trainingList = trainingState.trainingList;
    },

    addTraining: (state, action: PayloadAction<ITraining>) => {
      state.nextId = state.nextId + 1;
      if (!state.trainingList) {
        state.trainingList = [action.payload];
        window.localStorage.setItem("training", JSON.stringify(state));
        return;
      }
      state.trainingList.push(action.payload);
      window.localStorage.setItem("training", JSON.stringify(state));
    },

    updateTraining: (state, action: PayloadAction<ITraining>) => {
      if (!state.trainingList) return;
      const training = state.trainingList.find(
        ({ id }) => action.payload.id === id
      );

      if (!training) return;

      Object.assign(training, action.payload);
      window.localStorage.setItem("training", JSON.stringify(state));

      //!check if saved
    },

    setDayTrainingList: (state, action: PayloadAction<string>) => {},

    setChosenTraining: (state, action: PayloadAction<ITraining>) => {
      state.chosenTraining = action.payload;
    },
  },
});

const { actions, reducer } = trainingSlice;

export default reducer;

export const {
  getAllTraining,
  addTraining,
  updateTraining,
  setDayTrainingList: setDayTraining,
  setChosenTraining,
} = actions;
