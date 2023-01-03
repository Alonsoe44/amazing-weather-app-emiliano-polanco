import CityForecast from "../interfaces/CityForecast";

const cityDataOrganizer = (messyObject): CityForecast => ({
  country: messyObject.city.country,
  name: messyObject.city.name,
  latitude: messyObject.city.coord.lat,
  longitude: messyObject.city.coord.lon,
  forecastEvery3HoursCollection: messyObject.list.map((simpleForecast): any => {
    return {
      date: simpleForecast.dt_txt,
      weekday: new Date(simpleForecast.dt_txt).getDay(),
      hour: new Date(simpleForecast.dt_txt).getHours(),
      wind: {
        speed: simpleForecast.wind.speed,
        degrees: simpleForecast.wind.deg,
      },
      mainStats: {
        minTemperature: simpleForecast.main.temp_min - 273.15,
        maxTemperature: simpleForecast.main.temp_max - 273.15,
        temperature: simpleForecast.main.temp - 273.15,
        weather: simpleForecast.weather[0].main,
        humidity: simpleForecast.main.humidity,
      },
    } as any;
  }),
});

export default cityDataOrganizer;
