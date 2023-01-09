import { render, screen } from "@testing-library/react";
import WeekDayMenu from "./WeekDayMenu";

describe("Given a WeekDayMenu component", () => {
  describe("When it's rendered passing in that is Monday", () => {
    test("Then it should display the current day as a heading", () => {
      render(
        <WeekDayMenu selectedDay={1} setSelectedDay={() => {}} today={1} />
      );
      const monday = screen.getByRole("heading", { name: /monday/i, level: 2 });

      expect(monday).toBeInTheDocument();
    });
    test("Then it should display a button with the next day", () => {
      render(
        <WeekDayMenu selectedDay={1} setSelectedDay={() => {}} today={1} />
      );
      const tuesdayButton = screen.getByRole("button", { name: /tuesday/i });

      expect(tuesdayButton).toBeInTheDocument();
    });
  });
  describe("When it's rendered and pass in that it's friday and that Sunday it's selected", () => {
    test("Then it should display Monday as a button", async () => {
      render(
        <WeekDayMenu selectedDay={0} setSelectedDay={() => {}} today={5} />
      );

      const mondayButton = screen.getByRole("button", { name: /monday/i });

      expect(mondayButton).toBeInTheDocument();
    });
  });
});
