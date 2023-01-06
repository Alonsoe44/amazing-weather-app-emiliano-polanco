import { Route, Routes } from "react-router";
import City from "./pages/City";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import CityForecast from "./interfaces/CityForecast";

export const defaultCity: CityForecast = {
  name: "London",
  country: "GB",
  latitude: 51.5085,
  longitude: -0.1257,
  forecastEvery3HoursCollection: [
    {
      date: "2021-08-23T00:00:00+01:00",
      weekday: 2,
      hour: 3,
      mainStats: {
        humidity: 87,
        maxTemperature: 15.5,
        minTemperature: 15.5,
        temperature: 15.5,
        weather: "Clouds",
      },
      wind: {
        degrees: 180,
        speed: 1.03,
      },
    },
  ],
};

export const CityContext = createContext({
  city: defaultCity,
  setCity: (city: any) => {},
});

function App() {
  const [city, setCity] = useState(defaultCity);
  return (
    <CityContext.Provider value={{ city, setCity }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<Home />} />
          <Route path="/details/:city" element={<City />} />
        </Routes>
      </div>
    </CityContext.Provider>
  );
}

export default App;
