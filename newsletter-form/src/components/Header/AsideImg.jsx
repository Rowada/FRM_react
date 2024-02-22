// @ts-nocheck
import desktopImage from "../../assets/images/illustration-sign-up-desktop.svg";
import mobileImage from "../../assets/images/illustration-sign-up-mobile.svg";

export default function AsideImg() {
  return (
    <>
      <img
        className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
        src={desktopImage}
        alt="desktop-image"
      />
      <img
        className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"
        src={mobileImage}
        alt="mobile-image"
      />
    </>
  );
}
