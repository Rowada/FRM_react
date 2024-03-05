// @ts-nocheck
import { useState, useCallback } from "react";
import dividedDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividedMobile from "../assets/images/pattern-divider-mobile.svg";
import useAdviceApi from "../hooks/useAdviceApi";
import { Button } from "./Button";

export const Main = () => {
  const [reload, setReload] = useState(false);
  const { advice, adviceId, isLoading, error } = useAdviceApi(reload);

  const handleReload = useCallback(() => {
    setReload((prevReload) => !prevReload);
  }, []);

  return (
    <div className="bg-background rounded-lg relative mx-3 py-10 flex flex-col justify-center items-center md:px-10">
      <p className=" uppercase text-primary pb-5 text-sm tracking-widest font-semibold">
        advice #{isLoading ? "..." : adviceId}
      </p>
      <h1 className="text-2xl font-extrabold text-text text-center px-3 max-w-120 md:mb-5">
        {isLoading ? "Loading..." : <q>{advice}</q>}
        {error && <span>Error : {error}</span>}
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
      <Button onClick={handleReload} />
    </div>
  );
};
