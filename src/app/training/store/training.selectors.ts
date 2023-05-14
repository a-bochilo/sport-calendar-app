import { RootState } from "../../../store";

export const trainingListSelector = (state: RootState) =>
  state.training.trainingList;

export const chosenTrainingSelector = (state: RootState) =>
  state.training.chosenTraining;

export const nextTrainingIdSelector = (state: RootState) =>
  state.training.nextId;

export const dayTrainingListSelector = (state: RootState) =>
  state.training.dayTrainingList;
