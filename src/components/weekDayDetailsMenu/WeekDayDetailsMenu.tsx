import { stringToNumericWeekDay } from "../../utils/helpers";

const weekDays = [
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
];

interface WeekDayDetailsMenuProps {
  today: number;
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}

const WeekDayDetailsMenu = ({
  today,
  selectedDay,
  setSelectedDay,
}: WeekDayDetailsMenuProps) => {
  return (
    <menu className="flex justify-center w-full">
      {weekDays.slice(today, today + 5).map((day) => (
        <li
          key={day}
          className={`${
            selectedDay === stringToNumericWeekDay(day)
              ? "bg-accent/10 font-bold text-accent"
              : "bg-white"
          } px-2 rounded-lg text-secondaryText h-8 w-14 flex items-center justify-center`}
        >
          <button
            onClick={() => {
              setSelectedDay(stringToNumericWeekDay(day));
            }}
          >
            {day}
          </button>
        </li>
      ))}
    </menu>
  );
};

export default WeekDayDetailsMenu;
