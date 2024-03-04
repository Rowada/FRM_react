import React from "react";

import iconDice from "../assets/images/icon-dice.svg";

export const Button = () => {
  return (
    <div className="absolute -bottom-7">
      <button className="bg-primary p-4 rounded-full hover:shadow-neon transition-shadow delay-150 duration-200 ease-in-out">
        <img className="w-5" src={iconDice} alt="dice-icon" />
      </button>
    </div>
  );
};
