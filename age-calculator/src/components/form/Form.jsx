// @ts-nocheck
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
            placeholder="dd"
            value=""
            onChange={() => null}
          />

          <Input
            label="month"
            id="month"
            placeholder="mm"
            value=""
            onChange={() => null}
          />

          <Input
            label="year"
            id="year"
            placeholder="yyyy"
            value=""
            onChange={() => null}
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
