import CityForecast from "../interfaces/CityForecast";

const cityDataOrganizer = (messyObject): CityForecast => ({
  country: messyObject.city.country,
  name: messyObject.city.name,
  latitude: messyObject.city.coord.lat,
  longitude: messyObject.city.coord.lon,
  forecastEvery3HoursCollection: messyObject.list.map((simpleForecast): any => {
    return {
      date: simpleForecast.dt,
      weekday: new Date(simpleForecast.dtg).getDay(),
      hour: new Date(simpleForecast.dt).getHours(),
      wind: {
        speed: simpleForecast.wind.speed,
        degrees: simpleForecast.wind.deg,
      },
      mainStats: {
        minTemperature: simpleForecast.main.temp_min,
        maxTemperature: simpleForecast.main.temp_max,
        temperature: simpleForecast.main.temp,
        weather: simpleForecast.weather[0].main,
        humidity: simpleForecast.main.humidity,
      },
    } as any;
  }),
});

export default cityDataOrganizer;
