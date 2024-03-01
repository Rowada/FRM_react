// @ts-nocheck
import { useState } from "react";
import arrowIcon from "../../assets/images/icon-arrow.svg";
import { Input } from "./Input";

export const Form = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (fieldName, value) => {
    if (fieldName === "day") {
      setDay(value);
    } else if (fieldName === "month") {
      setMonth(value);
    } else if (fieldName === "year") {
      setYear(value);
    }

    setErrors({
      ...errors,
      [fieldName]: "", // Réinitialisez l'erreur lorsque la valeur change
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!day) {
      validationErrors.day = "This field is required";
    } else {
      const dayNum = parseInt(day, 10);
      if (dayNum < 1 || dayNum > 31) {
        validationErrors.day = "Must be a valid day";
      }
    }

    if (!month) {
      validationErrors.month = "This field is required";
    } else {
      const monthNum = parseInt(month, 10);
      if (monthNum < 1 || monthNum > 12) {
        validationErrors.month = "Must be a valid month";
      }
    }

    if (!year) {
      validationErrors.year = "This field is required";
    } else {
      const yearNum = parseInt(year, 10);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      if (yearNum > currentYear) {
        validationErrors.year = "Must be in the past";
      }
    }

    // Vérifier la validité de la date complète
    if (day && month && year) {
      const dayNum = parseInt(day, 10);
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);
      const inputDate = new Date(yearNum, monthNum - 1, dayNum);
      if (
        inputDate.getDate() !== dayNum ||
        inputDate.getMonth() + 1 !== monthNum ||
        inputDate.getFullYear() !== yearNum
      ) {
        validationErrors.day = "Must be a valid date";
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Valeurs soumises :", { day, month, year });
    }
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
            onChange={(value) => handleChange("day", value)}
            error={errors.day}
          />

          <Input
            label="month"
            id="month"
            placeholder="mm"
            value={month}
            onChange={(value) => handleChange("month", value)}
            error={errors.month}
          />

          <Input
            label="year"
            id="year"
            placeholder="yyyy"
            value={year}
            onChange={(value) => handleChange("year", value)}
            error={errors.year}
          />
        </div>

        <div className="flex my-12 md:my-8 relative items-center justify-center md:justify-end">
          <span className="bg-background h-[1px] w-full"></span>

          <button
            className="rounded-full p-3 md:p-4 bg-primary absolute focus:outline-none focus:bg-text hover:bg-text active:bg-text"
            type="submit"
          >
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
