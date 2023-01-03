import React from "react";

interface WeekDayMenuProps {
  weekDay: number;
  hour: number;
}

const WeekDayMenu = ({ weekDay, hour }: WeekDayMenuProps) => {
  return (
    <menu className="flex w-full justify-between text-thirdText">
      <li>Sunday</li>
      <li>
        <div className="flex flex-col text-center font-medium text-secondaryText">
          {weekDay}
          <time className="-translate-y-[6px] text-sm">{hour}</time>
        </div>
      </li>
      <li>Tuesday</li>
    </menu>
  );
};

export default WeekDayMenu;
