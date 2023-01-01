import { useState } from "react";
import CityForecast from "../../interfaces/CityForecast";
import WeekDayDetailsMenu from "../weekDayDetailsMenu/WeekDayDetailsMenu";

interface CityDetailsCardProps {
  city: CityForecast;
}
const CityDetailsCard = ({
  city: { country, forecastEvery3HoursCollection, latitude, longitude, name },
}: CityDetailsCardProps) => {
  const [selectedDay, setSelectedDay] = useState<string>("SU");
  return (
    <section className="w-11/12 min-h-full border shadow rounded-md p-3 flex flex-col items-center mt-6">
      <WeekDayDetailsMenu
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        today={3}
      />
      {name}
    </section>
  );
};

export default CityDetailsCard;
