import { IExercise } from "../../../types/exercise.types";

export interface IExerciseState {
  exerciseList: IExercise[] | null;
  trainingExerciseList: ITrainingExerciseList;
  chosenExercise: IExercise | null;
  nextId: number;
}

export interface ITrainingExerciseList {
  toDo: IExercise[];
  inProgress: IExercise[];
  done: IExercise[];
}
