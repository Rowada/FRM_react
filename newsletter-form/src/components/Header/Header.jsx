// @ts-nocheck
import checkIcon from "../../assets/images/icon-list.svg";

export default function Header() {
  return (
    <section className="flex flex-col justify-center mx-auto h-full gap-4 px-5">
      <h1 className="text-4xl font-bold text-text pt-5">Stay updated!</h1>

      <p className="font-normal text-sm">
        Join 60,000+ product managers receiving monthly updates on :
      </p>
      <div className="flex flex-col items-start gap-2">
        <span className="flex items-start font-normal">
          <img className="mr-4" src={checkIcon} alt="check-icon" />
          Product discovery and building what matters
        </span>
        <span className="flex items-start font-normal">
          {" "}
          <img className="mr-4" src={checkIcon} alt="check-icon" />
          Measuring to ensure updates are a success
        </span>
        <span className="flex items-start font-normal">
          {" "}
          <img className="mr-4" src={checkIcon} alt="check-icon" />
          And much more!
        </span>
      </div>
    </section>
  );
}
