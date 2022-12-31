import React from "react";
import CitySelector from "../components/citySelector/CitySelector";
import CityWeatherCard from "../components/cityWeatherCard/CityWeatherCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <CitySelector />
      <CityWeatherCard />
    </div>
  );
};

export default Home;
