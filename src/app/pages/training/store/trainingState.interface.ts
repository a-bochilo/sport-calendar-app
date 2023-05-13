import { ITraining } from "../../../../types/training.types";

export interface ITrainingState {
  trainingList: ITraining[] | null;
  dayTrainingList: ITraining[] | null;
  chosenTraining: ITraining | null;
  nextId: number;
}
