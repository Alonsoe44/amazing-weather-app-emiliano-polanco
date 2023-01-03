import { useRef, useState } from "react";
import CityForecast from "../../interfaces/CityForecast";
import TemperatureGraph from "../temperatureGraph/TemperatureGraph";
import WeekDayDetailsMenu from "../weekDayDetailsMenu/WeekDayDetailsMenu";

interface CityDetailsCardProps {
  city: CityForecast;
}
const numericToStringWeekDay = (numericWeekDay: number) => {
  switch (numericWeekDay) {
    case 0:
      return "MO";
    case 1:
      return "TU";
    case 2:
      return "WE";
    case 3:
      return "TH";
    case 4:
      return "FR";
    case 5:
      return "SA";
    case 6:
      return "SU";
    default:
      return "SU";
  }
};

const stringToNumericWeekDay = (stringWeekDay: string) => {
  switch (stringWeekDay) {
    case "MO":
      return 0;
    case "TU":
      return 1;
    case "WE":
      return 2;
    case "TH":
      return 3;
    case "FR":
      return 4;
    case "SA":
      return 5;
    case "SU":
      return 6;
    default:
      return 6;
  }
};
const CityDetailsCard = ({
  city: { country, forecastEvery3HoursCollection, latitude, longitude, name },
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
