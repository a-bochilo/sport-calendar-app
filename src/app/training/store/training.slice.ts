import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ===================== types =====================
import { ITrainingState } from "./trainingState.interface";
import { ITraining } from "../../../types/training.types";
import { ActivityStatus } from "../../../types/activityStatus.enum";

const initialState: ITrainingState = {
  trainingList: null,
  dayTrainingList: {
    toDo: [],
    inProgress: [],
    done: [],
  },
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
        "dayTrainingList" | "chosenTraining"
      >;

      state.trainingList = trainingState.trainingList;
      state.nextId = trainingState.nextId;
    },

    addTraining: (state, action: PayloadAction<ITraining>) => {
      state.nextId = state.nextId + 1;
      if (!state.trainingList) {
        state.trainingList = [action.payload];
        window.localStorage.setItem(
          "training",
          JSON.stringify({
            trainingList: state.trainingList,
            nextId: state.nextId,
          })
        );
        return;
      }

      state.trainingList.push(action.payload);
      window.localStorage.setItem(
        "training",
        JSON.stringify({
          trainingList: state.trainingList,
          nextId: state.nextId,
        })
      );
    },

    deleteTraining: (state, action: PayloadAction<number>) => {
      if (!state.trainingList) return;
      state.trainingList = state.trainingList.filter(
        (training) => training.id !== action.payload
      );

      window.localStorage.setItem(
        "training",
        JSON.stringify({
          trainingList: state.trainingList,
          nextId: state.nextId,
        })
      );
    },

    updateTraining: (state, action: PayloadAction<ITraining>) => {
      if (!state.trainingList) return;

      const training = state.trainingList.find(
        ({ id }) => action.payload.id === id
      );

      if (!training) return;

      Object.assign(training, action.payload);

      window.localStorage.setItem(
        "training",
        JSON.stringify({
          trainingList: state.trainingList,
          nextId: state.nextId,
        })
      );
    },

    setDayTrainingList: (state, action: PayloadAction<string>) => {
      state.dayTrainingList = {
        toDo: [],
        inProgress: [],
        done: [],
      };

      if (!state.trainingList) return;

      const fullDayTrainingList = state.trainingList.filter(
        (training) => training.date === action.payload
      );

      if (!fullDayTrainingList.length) return;

      fullDayTrainingList.forEach((training) => {
        switch (training.status) {
          case ActivityStatus.toDo:
            state.dayTrainingList.toDo.push(training);
            break;
          case ActivityStatus.inProgress:
            state.dayTrainingList.inProgress.push(training);
            break;
          case ActivityStatus.done:
            state.dayTrainingList.done.push(training);
            break;
          default:
            return;
        }
      });
    },

    setChosenTraining: (state, action: PayloadAction<ITraining>) => {
      state.chosenTraining = action.payload;
    },

    clearChosenTraining: (state) => {
      state.chosenTraining = null;
    },
  },
});

const { actions, reducer } = trainingSlice;

export default reducer;

export const {
  getAllTraining,
  addTraining,
  deleteTraining,
  updateTraining,
  setDayTrainingList,
  setChosenTraining,
  clearChosenTraining,
} = actions;
