import { Link } from "react-router-dom";
import WeekDayMenu from "../weekDayMenu/WeekDayMenu";
import { FiWind, FiDroplet } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useContext } from "react";
import { CityContext } from "../../App";

const CityWeatherCard = () => {
  const { city } = useContext(CityContext);
  const firstForecast = city.forecastEvery3HoursCollection[0];
  const {
    mainStats: { temperature, weather, humidity },
    wind: { speed },
    hour,
    weekday,
  } = firstForecast;
  return (
    <section className="w-11/12 min-h-full border shadow rounded-md p-3 flex flex-col items-center mt-6">
      <WeekDayMenu hour={hour} weekDay={weekday} />
      <div className="w-60 h-60 my-10 bg-accent rounded-full"></div>
      <div className="pl-12 w-full ">
        <p className="text-7xl font-bold">{temperature}°</p>
        <strong className="text-4xl font-medium text-accent">{weather}</strong>
        <h1 className="text-secondaryText text-3xl font-semibold my-5">
          {city.name}
          <div className="text-xl -translate-y-[8px]">{city.country}</div>
        </h1>
        <div className="h-[1px] w-5/6 bg-thirdText"></div>
        <ul className="flex flex-col text-secondaryText my-5">
          <li className="mb-2">
            <FiDroplet className="inline" />
            <span className="mx-2 font-bold text-black">{humidity}% </span>
            Humidity
          </li>
          <li>
            <FiWind className="inline" />
            <span className="mx-2 font-bold text-black">{speed}km/h </span> Wind
          </li>
        </ul>
      </div>
      <Link
        to={"/valencia"}
        className="w-[calc(100%+24px)] flex justify-center text-white bg-accent h-16 translate-y-3"
      >
        <div className="bg-accent h-full flex items-center font-medium ">
          Details
          <MdOutlineArrowForwardIos className="ml-1 translate-y-[1px]" />
        </div>
      </Link>
    </section>
  );
};

export default CityWeatherCard;
