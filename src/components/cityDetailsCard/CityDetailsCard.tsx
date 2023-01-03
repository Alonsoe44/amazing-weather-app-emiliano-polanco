import { useRef, useState } from "react";
import CityForecast from "../../interfaces/CityForecast";
import {
  numericToStringWeekDay,
  stringToNumericWeekDay,
} from "../../utils/helpers";
import TemperatureGraph from "../temperatureGraph/TemperatureGraph";
import WeekDayDetailsMenu from "../weekDayDetailsMenu/WeekDayDetailsMenu";

interface CityDetailsCardProps {
  city: CityForecast;
}

const CityDetailsCard = ({
  city: { forecastEvery3HoursCollection },
}: CityDetailsCardProps) => {
  const todayNumeric = useRef(forecastEvery3HoursCollection[0].weekday - 1);
  const [selectedDay, setSelectedDay] = useState<string>(
    numericToStringWeekDay(todayNumeric.current)
  );

  return (
    <section className="w-[95%] h-screen border border-thirdText shadow rounded-xl py-10 flex flex-col items-center mt-6 ">
      <WeekDayDetailsMenu
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        today={todayNumeric.current}
      />
      <TemperatureGraph
        temperaturePoints={forecastEvery3HoursCollection
          .filter(
            (simpleForecast) =>
              simpleForecast.weekday === stringToNumericWeekDay(selectedDay) + 1
          )
          .map((simpleForecast) => ({
            temperature: simpleForecast.mainStats.temperature,
            hour: simpleForecast.hour,
          }))}
      />
    </section>
  );
};

export default CityDetailsCard;
