// @ts-nocheck
import checkIcon from "../../assets/images/icon-list.svg";

export default function Header() {
  const listItems = [
    {
      id: 1,
      url: checkIcon,
      text: "Product discovery and building what matters",
    },
    {
      id: 2,
      url: checkIcon,
      text: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      url: checkIcon,
      text: "And much more!",
    },
  ];

  return (
    <section className="flex flex-col justify-center mx-auto h-full gap-5 px-5 md:px-10">
      <h1 className="text-4xl font-bold text-text pt-5 md:text-5xl">
        Stay updated!
      </h1>

      <p className="font-normal text-sm w-80">
        Join 60,000+ product managers receiving monthly updates on :
      </p>
      <div className="flex flex-col items-start gap-2">
        {listItems.map((list) => (
          <span key={list.id} className="flex items-start font-normal">
            <img className="mr-4" src={list.url} alt="check-icon" />
            {list.text}
          </span>
        ))}
      </div>
    </section>
  );
}
