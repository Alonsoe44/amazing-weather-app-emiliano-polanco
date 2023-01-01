export default interface Forecast {
  date: string;
  weekday: string;
  hour: string;
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
