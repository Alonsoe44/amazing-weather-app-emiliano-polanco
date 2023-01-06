import { useContext } from "react";
import { CityContext } from "../App";
import CityDetailsCard from "../components/cityDetailsCard/CityDetailsCard";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Grid } from "react-loader-spinner";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const City = () => {
  const { loading } = useFetch();
  const { city } = useContext(CityContext);
  return (
    <div className="flex justify-center flex-col items-center">
      {loading ? (
        <div className="flex w-full min-h-screen justify-center items-center">
          <Grid color="#5640A8"></Grid>
        </div>
      ) : (
        <>
          <Link
            to={`/${city.name}`}
            className="flex items-center w-full pl-2 my-1"
          >
            <MdKeyboardArrowLeft className="inline" />
            <h1 className="text-xl text-accent">{city.name}</h1>
          </Link>
          <CityDetailsCard city={city} />
        </>
      )}
    </div>
  );
};

export default City;
