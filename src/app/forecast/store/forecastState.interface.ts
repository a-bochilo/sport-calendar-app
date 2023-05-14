import { IApiWeaterResponse } from "../../../types/api.types";

export interface IForecastState {
  data: IApiWeaterResponse | null;
  pending: boolean;
  error: boolean;
}
