import { ActivityStatus } from "./activityStatus.enum";
import { IExercise } from "./exercise.types";

export interface ITraining {
  id: number;
  date: string;
  status: ActivityStatus;
  exerciseIds: number[];
}

export interface ITrainingWithExercise extends ITraining {
  exercise: IExercise[] | undefined;
}
