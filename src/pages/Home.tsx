import { useContext } from "react";
import { CityContext } from "../App";
import CitySelector from "../components/citySelector/CitySelector";
import CityWeatherCard from "../components/cityWeatherCard/CityWeatherCard";
import { Grid } from "react-loader-spinner";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { loading } = useFetch();
  const { city } = useContext(CityContext);
  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        loading && " justify-center"
      }`}
    >
      {loading ? (
        <Grid color="#5640A8"></Grid>
      ) : (
        <>
          <CitySelector />
          <CityWeatherCard city={city} />
        </>
      )}
    </div>
  );
};

export default Home;
