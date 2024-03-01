// @ts-nocheck
import React from "react";

export const Age = ({ formData }) => {
  const calculateAge = ({ day, month, year }) => {
    if (!day || !month || !year) {
      return { years: "--", months: "--", days: "--" };
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Soustraire 1 car les mois sont indexés à partir de 0

    let age = today.getFullYear() - birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const todayMonth = today.getMonth();
    const birthDay = birthDate.getDate();
    const todayDay = today.getDate();

    if (
      todayMonth < birthMonth ||
      (todayMonth === birthMonth && todayDay < birthDay)
    ) {
      age--;
    }

    let months = todayMonth - birthMonth;
    if (months < 0 || (months === 0 && todayDay < birthDay)) {
      months += 12;
    }

    let days = todayDay - birthDay;
    if (days < 0) {
      const prevMonthLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += prevMonthLastDay;
      months--;
    }

    return { years: age, months: months, days: days };
  };

  const age = formData
    ? calculateAge(formData)
    : { years: "--", months: "--", days: "--" };

  return (
    <div>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabolditalic">
        <span className="text-primary tracking-wide pr-2">{age.years}</span>
        years
      </h2>
      <h2 className="text-5xl leading-snug sm:text-6xl md:text-7xl font-extrabolditalic">
        <span className="text-primary tracking-wide pr-2">{age.months}</span>
        months
      </h2>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabolditalic">
        <span className="text-primary tracking-wide pr-2">{age.days}</span>
        days
      </h2>
    </div>
  );
};
