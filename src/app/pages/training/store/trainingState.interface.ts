import { ITraining } from "../../../../types/training.types";

export interface ITrainingState {
  trainingList: ITraining[] | null;
  dayTrainingList: IDayTrainingList;
  chosenTraining: ITraining | null;
  nextId: number;
}

export interface IDayTrainingList {
  toDo: ITraining[];
  inProgress: ITraining[];
  done: ITraining[];
}
