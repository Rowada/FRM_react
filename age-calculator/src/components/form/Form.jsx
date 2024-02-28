import React from "react";
import arrowIcon from "../../assets/images/icon-arrow.svg";
import { Input } from "./Input";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="flex items-center justify-start gap-4">
          <Input
            label="day"
            id="day"
            placeholder="DD"
            value=""
            onChange={() => null}
          />

          <Input
            label="month"
            id="month"
            placeholder="MM"
            value=""
            onChange={() => null}
          />

          <Input
            label="year"
            id="year"
            placeholder="YYYY"
            value=""
            onChange={() => null}
          />
        </div>

        <div className="flex mt-10 relative">
          <span className="bg-background h-[1px] w-full"></span>

          <button className="rounded-full p-3 bg-primary absolute -top-8 right-0 hover:bg-text">
            <img className="w-10 h-auto" src={arrowIcon} alt="arrow-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};
