import { RootState } from "../../../store";

export const exerciseListSelector = (state: RootState) =>
  state.exercise.exerciseList;

export const chosenExerciseSelector = (state: RootState) =>
  state.exercise.chosenExercise;

export const nextExerciseIdSelector = (state: RootState) =>
  state.exercise.nextId;

export const trainingExerciseListSelector = (state: RootState) =>
  state.exercise.trainingExerciseList;
