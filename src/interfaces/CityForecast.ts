import Forecast from "./Forecast";

export default interface CityForecast {
  country: string;
  name: string;
  forecastEvery3HoursCollection: Forecast[];
  latitude: number;
  longitude: number;
}
