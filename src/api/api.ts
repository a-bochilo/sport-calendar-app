import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// ===== weather instance =====
const $apiWeather = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: `${BASE_URL}/data/2.5/`,
});

export default $apiWeather;
