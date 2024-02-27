import React from "react";
import arrowIcon from "../../assets/images/icon-arrow.svg";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="flex items-center justify-start gap-4">
          <div className="flex flex-col">
            <label className="text-accent uppercase" htmlFor="day">
              day
            </label>
            <input
              className="border block border-background rounded-md py-3 pl-3"
              type="text"
              id="day"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-accent uppercase" htmlFor="month">
              month
            </label>
            <input
              className="border border-background rounded-md py-3 pl-3"
              type="text"
              id="month"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-accent uppercase" htmlFor="year">
              year
            </label>
            <input
              className="border border-background rounded-md py-3 pl-3"
              type="text"
              id="year"
            />
          </div>
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
