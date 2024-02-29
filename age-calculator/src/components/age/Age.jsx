import React from "react";

export const Age = () => {
  return (
    <div>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabolditalic">
        <span className="text-primary tracking-wide pr-1">--</span>
        years
      </h2>
      <h2 className="text-5xl leading-snug sm:text-6xl md:text-7xl font-extrabolditalic">
        <span className="text-primary tracking-wide pr-1">--</span>
        months
      </h2>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabolditalic">
        <span className="text-primary tracking-wide pr-1">--</span>
        days
      </h2>
    </div>
  );
};
