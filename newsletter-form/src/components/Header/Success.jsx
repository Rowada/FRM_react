// @ts-nocheck

import successIcon from "../../assets/images/icon-success.svg";

export default function Success({ email }) {
  return (
    <div className="pt-20 mx-5 h-full flex flex-col justify-between">
      <div>
        <img className="w-16 h-auto" src={successIcon} alt="success-icon" />

        <h1 className="text-4xl font-bold w-80 text-text pt-5 mb-2 lg:text-5xl">
          Thanks for subscribing!
        </h1>
        <p className="font-normal text-sm mb-20 w-80">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>
      </div>
      <button className="block w-full mb-10 bg-text text-secondary font-bold text-sm rounded-md py-3 px-3 hover:bg-gradient-to-l hover:from-primary hover:to-hover">
        Dismiss message
      </button>
    </div>
  );
}
