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

const numericToStringWeekDay = (numericWeekDay: number) => {
  switch (numericWeekDay) {
    case 0:
      return "MO";
    case 1:
      return "TU";
    case 2:
      return "WE";
    case 3:
      return "TH";
    case 4:
      return "FR";
    case 5:
      return "SA";
    case 6:
      return "SU";
    default:
      return "SU";
  }
};

const numberToWeekDayFull = (number: number) => {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
};

const findMaxNextDay = (today: number) => {
  return today + 4 >= 7 ? today - 6 + 4 : today + 4;
};

const stringToNumericWeekDay = (stringWeekDay: string) => {
  switch (stringWeekDay) {
    case "MO":
      return 0;
    case "TU":
      return 1;
    case "WE":
      return 2;
    case "TH":
      return 3;
    case "FR":
      return 4;
    case "SA":
      return 5;
    case "SU":
      return 6;
    default:
      return 6;
  }
};

export {
  cityDataOrganizer,
  numericToStringWeekDay,
  stringToNumericWeekDay,
  numberToWeekDayFull,
  findMaxNextDay,
};
