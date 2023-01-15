import { useContext } from "react";
import { CityContext } from "../App";
import CitySelector from "../components/citySelector/CitySelector";
import CityWeatherCard from "../components/cityWeatherCard/CityWeatherCard";
import { Grid } from "react-loader-spinner";
import useFetch from "../hooks/useFetch";
import { Canvas } from "@react-three/fiber";
import Background from "../components/background/Background";

const Home = () => {
  const { loading } = useFetch();
  const { city } = useContext(CityContext);
  return (
    <div
      className={`flex flex-col items-center min-h-screen justify-center ${
        loading && " justify-center"
      }`}
    >
      <div className="h-screen w-full -z-20 absolute">
        <Canvas camera={{ position: [3, 3, 3], zoom: 100 }} orthographic>
          <Background />
        </Canvas>
      </div>
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
