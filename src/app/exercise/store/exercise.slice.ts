import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ===================== types =====================
import { IExerciseState } from "./exerciseState.interface";
import { IExercise } from "../../../types/exercise.types";
import { ActivityStatus } from "../../../types/activityStatus.enum";

const initialState: IExerciseState = {
  exerciseList: null,
  trainingExerciseList: {
    toDo: [],
    inProgress: [],
    done: [],
  },
  chosenExercise: null,
  nextId: 0,
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    getAllExercise: (state) => {
      const exerciseFromLS = window.localStorage.getItem("exercise");
      if (!exerciseFromLS) return;

      const exerciseState = JSON.parse(exerciseFromLS) as Omit<
        IExerciseState,
        "trainingExerciseList" | "chosenExercise"
      >;

      state.exerciseList = exerciseState.exerciseList;
      state.nextId = exerciseState.nextId;
    },

    addExercise: (state, action: PayloadAction<IExercise>) => {
      state.nextId = state.nextId + 1;
      if (!state.exerciseList) {
        state.exerciseList = [action.payload];
        window.localStorage.setItem(
          "exercise",
          JSON.stringify({
            exerciseList: state.exerciseList,
            nextId: state.nextId,
          })
        );
        return;
      }

      state.exerciseList.push(action.payload);
      window.localStorage.setItem(
        "exercise",
        JSON.stringify({
          exerciseList: state.exerciseList,
          nextId: state.nextId,
        })
      );
    },

    deleteExercise: (state, action: PayloadAction<number>) => {
      if (!state.exerciseList) return;

      state.exerciseList = state.exerciseList.filter(
        (exercise) => exercise.id !== action.payload
      );

      window.localStorage.setItem(
        "exercise",
        JSON.stringify({
          exerciseList: state.exerciseList,
          nextId: state.nextId,
        })
      );
    },

    updateExercise: (state, action: PayloadAction<IExercise>) => {
      if (!state.exerciseList) return;

      const training = state.exerciseList.find(
        ({ id }) => action.payload.id === id
      );

      if (!training) return;

      Object.assign(training, action.payload);

      window.localStorage.setItem(
        "exercise",
        JSON.stringify({
          exerciseList: state.exerciseList,
          nextId: state.nextId,
        })
      );
    },

    setTrainingExerciseList: (state, action: PayloadAction<number[]>) => {
      state.trainingExerciseList = {
        toDo: [],
        inProgress: [],
        done: [],
      };

      if (!state.exerciseList) return;

      const fullTrainingExerciseList = state.exerciseList.filter((exercise) =>
        action.payload.includes(exercise.id)
      );

      if (!fullTrainingExerciseList.length) return;

      fullTrainingExerciseList.forEach((exercise) => {
        switch (exercise.status) {
          case ActivityStatus.toDo:
            state.trainingExerciseList.toDo.push(exercise);
            break;
          case ActivityStatus.inProgress:
            state.trainingExerciseList.inProgress.push(exercise);
            break;
          case ActivityStatus.done:
            state.trainingExerciseList.done.push(exercise);
            break;
          default:
            return;
        }
      });
    },

    setChosenExercise: (state, action: PayloadAction<IExercise>) => {
      state.chosenExercise = action.payload;
    },

    clearChosenExercise: (state) => {
      state.chosenExercise = null;
    },
  },
});

const { actions, reducer } = exerciseSlice;

export default reducer;

export const {
  getAllExercise,
  addExercise,
  deleteExercise,
  updateExercise,
  setTrainingExerciseList,
  setChosenExercise,
  clearChosenExercise,
} = actions;
