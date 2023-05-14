import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// ===================== types =====================
import { IForecastState } from "./forecastState.interface";
import { IApiWeaterResponse } from "../../../types/api.types";

// ===================== actions =====================
import { fetchWeatherForecast } from "./forecast.actions";

const initialState: IForecastState = {
  data: null,
  pending: false,
  error: false,
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(
        fetchWeatherForecast.fulfilled,
        (state, action: PayloadAction<IApiWeaterResponse>) => {
          state.pending = false;
          state.error = false;

          state.data = action.payload;
        }
      )
      .addCase(fetchWeatherForecast.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

const { actions, reducer } = forecastSlice;

export default reducer;

export const {} = actions;
