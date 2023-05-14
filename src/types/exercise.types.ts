import { ActivityStatus } from "./activityStatus.enum";

export interface IExerciseCardProps {
  type: ExerciseTypes;
}

export enum ExerciseTypes {
  running = "Running",
  plank = "Plank",
  pullups = "Pullups",
  pushups = "Pushups",
  squats = "Squats",
}

export interface IExercise {
  id: number;
  status: ActivityStatus;
  type: ExerciseTypes;
  value: number;
  sets: number;
  trainingId: number;
}
