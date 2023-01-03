import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { defaultCity } from "../../App";
import CityForecast from "../../interfaces/CityForecast";
import CityWeatherCard from "./CityWeatherCard";

describe("Given a CityWeatherCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the city as a heading", () => {
      render(
        <BrowserRouter>
          <CityWeatherCard city={defaultCity as CityForecast} />
        </BrowserRouter>
      );

      const cityHeading = screen.getByRole("heading", { name: /london/i });

      expect(cityHeading).toBeInTheDocument();
    });
  });
});
