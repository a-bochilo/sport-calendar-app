import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

// ===================== api =====================
import $apiWeather from "../../../api/api";

// ===================== types =====================
import {
  IApiWeaterGetProps,
  IApiWeaterResponse,
} from "../../../types/api.types";

export const fetchWeatherForecast = createAsyncThunk<
  IApiWeaterResponse,
  IApiWeaterGetProps
>("forecast/fetchWeatherForecast", async (props: IApiWeaterGetProps) => {
  try {
    const { data } = await $apiWeather.get<
      any,
      AxiosResponse<IApiWeaterResponse, any>,
      any
    >(
      `forecast?lat=${props.latitude}&lon=${props.longitude}&appid=${process.env.REACT_APP_APIKEY}`
    );
    return data;
  } catch (e: any) {
    console.error(e);
    return e;
  }
});
