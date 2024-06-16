import footerBackground from "../assets/Background.png";
import footerImg from "../assets/Footer Image.png";
import appStoreImg from "../assets/App Store.png";
import googlePlayImg from "../assets/Google Play.png";
import pocketShopLogo from "../assets/mobile-logo.jpg";

const Footer = () => {
  return (
    <div className="">
      <div className="relative">
        <img src={footerBackground} className="mx-auto h-[45rem]" alt="" />
        <div className="absolute top-20 md:left-20 lg:left-28 xl:left-96">
          <div className="manrope text-center">
            <p className="font-medium text-white">Elevate your Business</p>
            <h4 className="font-semibold text-2xl lg:text-3xl text-white my-2">
              Elevate & Thrive, Take Your Business to the Next Level
            </h4>
            <button className="manrope font-bold bg-[#FF6701] rounded-full py-2 px-4 text-white my-4">
              Download Now
            </button>
            <div className="flex gap-2 justify-center my-4">
              <img src={appStoreImg} alt="" />
              <img src={googlePlayImg} alt="" />
            </div>
          </div>
          <div className="md:pl-9">
            <img src={footerImg} className="p-1 mx-auto" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2 bg-[#202047] text-white pt-16 px-2 pb-4 md:pt-36">
        <div className="flex gap-2">
          <img src={pocketShopLogo} className="w-6 h-6 lg:w-8 lg:h-8" alt="" />
          <p className="text-white lg:text-lg">Pocket Shop</p>
        </div>
        © 2021 Octet Design Studio.
      </div>
    </div>
  );
};

export default Footer;
