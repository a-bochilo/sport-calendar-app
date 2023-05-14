import { upperFirst } from "lodash";

// ===================== mui =====================
import { Typography, Card } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

// ===================== types =====================
import { IForecastItem } from "../../types/api.types";

const WeatherForecast = ({
  city,
  forecast,
}: {
  city: string;
  forecast: IForecastItem;
}) => {
  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <Typography variant="body1" component="p" mr={1} color={"error.main"}>
        <ThermostatIcon />/<ThunderstormIcon /> Weather warning in {city}!
      </Typography>
      <Typography variant="body1" component="p" mr={1}>
        {upperFirst(forecast.weather[0].description)} is expected, temperature
        of about {Math.round(forecast.main.temp - 273)} C
      </Typography>
    </Card>
  );
};

export default WeatherForecast;
