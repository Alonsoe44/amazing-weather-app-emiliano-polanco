import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CityContext } from "../../App";
import CityForecast from "../../interfaces/CityForecast";
import CityWeatherCard from "./CityWeatherCard";

describe("Given a CityWeatherCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the city as a heading", () => {
      const city: CityForecast = {
        name: "London",
        country: "GB",
        latitude: 51.5085,
        longitude: -0.1257,
        forecastEvery3HoursCollection: [
          {
            date: "2021-08-23T00:00:00+01:00",
            weekday: "Tuesday",
            hour: "8:00",
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
      render(
        <CityContext.Provider value={{ city: city, setCity: () => {} }}>
          <BrowserRouter>
            <CityWeatherCard />
          </BrowserRouter>
        </CityContext.Provider>
      );

      const cityHeading = screen.getByRole("heading", { name: /london/i });

      expect(cityHeading).toBeInTheDocument();
    });
  });
});
