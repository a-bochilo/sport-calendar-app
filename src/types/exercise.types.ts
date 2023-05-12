export interface IExerciseCardProps {
  type: ExerciseTypes;
}

export enum ExerciseTypes {
  running = "running",
  pullups = "pullups",
  pushups = "pushups",
  plank = "plank",
  squats = "squats",
}
