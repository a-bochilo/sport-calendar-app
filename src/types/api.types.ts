export interface IApiWeaterGetProps {
  latitude: number;
  longitude: number;
}

export interface IApiWeaterResponse {
  city: { name: string };
  list: IForecastItem[];
}

export interface IForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: [{ main: string; description: string }];
}
