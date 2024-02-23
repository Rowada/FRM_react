// @ts-nocheck
import desktopImage from "../../assets/images/illustration-sign-up-desktop.svg";
import mobileImage from "../../assets/images/illustration-sign-up-mobile.svg";

export default function AsideImg() {
  return (
    <div className="w-full md:w-96">
      <img
        className="object-cover w-full h-auto hidden sm:hidden md:block lg:block xl:block 2xl:block"
        src={desktopImage}
        alt="desktop-image"
      />
      <img
        className="object-cover w-full h-auto block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        src={mobileImage}
        alt="mobile-image"
      />
    </div>
  );
}
