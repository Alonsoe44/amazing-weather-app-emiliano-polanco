import React, { useContext } from "react";
import { useParams } from "react-router";
import { CityContext } from "../App";
import CitySelector from "../components/citySelector/CitySelector";
import CityWeatherCard from "../components/cityWeatherCard/CityWeatherCard";
import useFetch from "../hooks/useFetch";
import { Grid } from "react-loader-spinner";

const Home = () => {
  const { city: cityNameParams } = useParams();
  const { loading } = useFetch(
    process.env.REACT_APP_URL as string,
    process.env.REACT_APP_GEOCODING_URL as string,
    cityNameParams as string,
    process.env.REACT_APP_API_KEY as string
  );
  const { city } = useContext(CityContext);
  return loading ? (
    <Grid color="#5640A8"></Grid>
  ) : (
    <div className="flex flex-col items-center min-h-screen">
      <CitySelector />
      <CityWeatherCard city={city} />
    </div>
  );
};

export default Home;
