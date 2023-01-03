export default interface Forecast {
  date: string;
  weekday: number;
  hour: number;
  mainStats: {
    minTemperature: number;
    maxTemperature: number;
    temperature: number;
    weather: string;
    humidity: number;
  };
  wind: {
    speed: number;
    degrees: number;
  };
}
