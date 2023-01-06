import React, { useContext } from "react";
import { useParams } from "react-router";
import { CityContext } from "../App";
import CityDetailsCard from "../components/cityDetailsCard/CityDetailsCard";
import useFetch from "../hooks/useFetch";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Grid } from "react-loader-spinner";
import { Link } from "react-router-dom";

const City = () => {
  const { city: cityNameParams } = useParams();
  const { loading } = useFetch(
    process.env.REACT_APP_URL as string,
    process.env.REACT_APP_GEOCODING_URL as string,
    cityNameParams as string,
    process.env.REACT_APP_API_KEY as string
  );
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
            to={`/${cityNameParams}`}
            className="flex items-center w-full pl-2 my-1"
          >
            <MdKeyboardArrowLeft className="inline" />
            <h1 className="text-xl text-secondaryText">{city.name}</h1>
          </Link>
          <CityDetailsCard city={city} />
        </>
      )}
    </div>
  );
};

export default City;
