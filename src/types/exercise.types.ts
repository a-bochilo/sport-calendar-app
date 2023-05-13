import { ActivityStatus } from "./activityStatus.enum";

export interface IExerciseCardProps {
  type: ExerciseTypes;
}

export enum ExerciseTypes {
  running = "running",
  plank = "plank",
  pullups = "pullups",
  pushups = "pushups",
  squats = "squats",
}

export interface IExercise {
  id: number;
  date: string;
  status: ActivityStatus;
  type: ExerciseTypes;
  value: number;
  sets: number;
  trainigId: number;
}
