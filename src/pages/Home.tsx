import React from "react";
import CityWeatherCard from "../components/cityWeatherCard/CityWeatherCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <CityWeatherCard />
    </div>
  );
};

export default Home;
