import { ActivityStatus } from "./activityStatus.enum";

export interface ITraining {
  id: number;
  date: string;
  status: ActivityStatus;
  exerciseIds: number[];
}
