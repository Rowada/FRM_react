import React from "react";

import dividedMobile from "../assets/images/pattern-divider-mobile.svg";
import dividedDesktop from "../assets/images/pattern-divider-desktop.svg";
import { Button } from "./Button";

export const Main = () => {
  return (
    <div className="bg-background rounded-md relative mx-3 py-10 flex flex-col justify-center items-center md:px-10">
      <p className=" uppercase text-primary pb-5 text-sm tracking-widest font-semibold">
        advice #117
      </p>
      <h1 className="text-2xl font-extrabold text-text text-center px-3 max-w-[420px] md:mb-5">
        <q>
          It is easy to sit up and take notice, what's difficult is getting up
          and taking action.
        </q>
      </h1>
      <div className="max-w-[420px] px-3">
        <img
          className="mt-5 mb-6 block sm:block md:hidden"
          src={dividedMobile}
          alt="divided-mobile"
        />

        <img
          className="mt-5 mb-6 hidden sm-hidden md:block"
          src={dividedDesktop}
          alt="divided-desktop"
        />
      </div>
      <Button />
    </div>
  );
};
