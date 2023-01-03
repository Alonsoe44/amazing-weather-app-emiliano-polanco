import { findMaxNextDay, numberToWeekDayFull } from "../../utils/helpers";

interface WeekDayMenuProps {
  selectedDay: number;
  today: number;
  setSelectedDay: (day: number) => void;
}

const WeekDayMenu = ({
  selectedDay,
  today,
  setSelectedDay,
}: WeekDayMenuProps) => {
  return (
    <menu className="flex w-full justify-center text-thirdText">
      <li className={`${selectedDay === today && "invisible"} w-16`}>
        <button onClick={() => setSelectedDay(selectedDay - 1)}>
          {numberToWeekDayFull(selectedDay - 1)}
        </button>
      </li>
      <li className="w-32 mx-5">
        <div className="flex flex-col text-center font-semibold text-accent">
          {numberToWeekDayFull(selectedDay)}
        </div>
      </li>
      <li
        className={`w-16  ${
          selectedDay === findMaxNextDay(today) && "invisible h-0"
        }`}
      >
        <button onClick={() => setSelectedDay(selectedDay + 1)}>
          {numberToWeekDayFull(selectedDay + 1)}
        </button>
      </li>
    </menu>
  );
};

export default WeekDayMenu;
