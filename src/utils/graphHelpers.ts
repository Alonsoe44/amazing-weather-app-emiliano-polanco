import Forecast from "../interfaces/Forecast";
import WindPoint from "../interfaces/WindPoint";

export const getForecastsOfADayCurrying =
  (forecasts: Forecast[]) =>
  (day: number): Forecast[] =>
    forecasts.filter((simpleForecast) => simpleForecast.weekday === day);

const toTemperaturePoints = (forecasts) =>
  forecasts.map((simpleForecast) => ({
    temperature: simpleForecast.mainStats.temperature,
    hour: simpleForecast.hour,
  }));

const toWindPoints = (forecasts: Forecast[]): WindPoint[] =>
  forecasts.map((simpleForecast) => ({
    velocity: simpleForecast.wind.speed,
    degrees: simpleForecast.wind.degrees,
    hour: simpleForecast.hour,
  }));

const compose = (f, g) => (x: number) => f(g(x));

const getWindPointsOf = (forecast: Forecast[]) =>
  compose(toWindPoints, getForecastsOfADayCurrying(forecast));

const getTemperaturePointsOf = (forecast: Forecast[]) =>
  compose(toTemperaturePoints, getForecastsOfADayCurrying(forecast));

export { getTemperaturePointsOf, getWindPointsOf };
