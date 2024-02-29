// @ts-nocheck
import { useState } from "react";
import arrowIcon from "../../assets/images/icon-arrow.svg";
import { Input } from "./Input";

export const Form = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);

  // Gérez le changement de chaque champ
  const handleDayChange = (newValue) => {
    setDay(newValue);
  };

  const handleMonthChange = (newValue) => {
    setMonth(newValue);
  };

  const handleYearChange = (newValue) => {
    setYear(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Valeurs soumises :", { day, month, year });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-start gap-4">
          <Input
            label="day"
            id="day"
            placeholder="dd"
            value={day}
            onChange={handleDayChange}
          />

          <Input
            label="month"
            id="month"
            placeholder="mm"
            value={month}
            onChange={handleMonthChange}
          />

          <Input
            label="year"
            id="year"
            placeholder="yyyy"
            value={year}
            onChange={handleYearChange}
          />
        </div>

        <div className="flex my-12 md:my-8 relative items-center justify-center md:justify-end">
          <span className="bg-background h-[1px] w-full"></span>

          <button className="rounded-full p-3 md:p-4 bg-primary absolute focus:outline-none focus:bg-text hover:bg-text active:bg-text">
            <img
              className="w-5 md:w-8 h-auto"
              src={arrowIcon}
              alt="arrow-icon"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
