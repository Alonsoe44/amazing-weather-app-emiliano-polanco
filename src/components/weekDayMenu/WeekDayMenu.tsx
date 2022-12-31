import React from "react";

const WeekDayMenu = () => {
  return (
    <menu className="flex w-full justify-between text-thirdText">
      <li>Sunday</li>
      <li>
        <div className="flex flex-col text-center font-medium text-secondaryText">
          Monday
          <time className="-translate-y-[6px] text-sm">11:00</time>
        </div>
      </li>
      <li>Tuesday</li>
    </menu>
  );
};

export default WeekDayMenu;
