import { useRef, useState } from "react";
import CityForecast from "../../interfaces/CityForecast";
import {
  getTemperaturePointsOf,
  getWindPointsOf,
} from "../../utils/graphHelpers";
import TemperatureGraph from "../temperatureGraph/TemperatureGraph";
import WeekDayDetailsMenu from "../weekDayDetailsMenu/WeekDayDetailsMenu";
import WindGraph from "../windGraph/WindGraph";

interface CityDetailsCardProps {
  city: CityForecast;
}

const CityDetailsCard = ({
  city: { forecastEvery3HoursCollection },
}: CityDetailsCardProps) => {
  const today = useRef(forecastEvery3HoursCollection[0].weekday);
  const [selectedDay, setSelectedDay] = useState<number>(today.current);

  return (
    <section className="w-[95%] h-screen border border-thirdText shadow rounded-xl py-10 flex flex-col items-center ">
      <WeekDayDetailsMenu
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        today={today.current}
      />
      <TemperatureGraph
        temperaturePoints={getTemperaturePointsOf(
          forecastEvery3HoursCollection
        )(selectedDay)}
      />
      <WindGraph
        windPoints={getWindPointsOf(forecastEvery3HoursCollection)(selectedDay)}
      />
    </section>
  );
};

export default CityDetailsCard;
