import backgroundBlue from "../assets/Background - Blue.png";
import backgroundOrange from "../assets/Background - Orange.png";
import pocketShopLogo from "../assets/mobile-logo.jpg";
import appStore from "../assets/App Store.png";
import googlePlay from "../assets/Google Play.png";
import dotBox from "../assets/Background Design element - Circles.png";
import mobileScreen1 from "../assets/Cover Image.png";

const CoverArea = () => {
  return (
    <div className="relative">
      <img
        src={backgroundOrange}
        className="absolute w-full h-[350px] lg:h-[600px] xl:h-[700px]"
        alt=""
      />
      <img
        src={backgroundBlue}
        className="absolute -top-4 lg:-top-7 w-full h-[350px] lg:h-[600px] xl:h-[700px]"
        alt=""
      />
      <div className="absolute w-full h-10 p-2 mt-0 ml-0">
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <img
              src={pocketShopLogo}
              className="w-6 h-6 lg:w-8 lg:h-8"
              alt=""
            />
            <p className="text-white lg:text-lg">Pocket Shop</p>
          </div>
          <button className="w-28 h-8 lg:w-32 lg:h-10 bg-[#FF6701] p-3 rounded-xl text-white flex justify-center items-center cursor-pointer">
            Download
          </button>
        </div>
      </div>

      <div className="absolute top-16 px-2 lg:w-full">
        <div className="lg:flex lg:justify-around xl:ml-36 lg:w-full lg:gap-4">
          <div className="lg:w-[400px] lg:h-[500px] lg:flex lg:flex-col lg:justify-center">
            <h3 className="text-white manrope font-semibold text-2xl lg:3xl">
              Sell Digital Products the easy-peasy way
            </h3>
            <p className="text-white manrope mt-1 lg:text-lg">
              Turning your creations into cash doesn't have to be complicated.
              With the right tools, you can be up and selling your digital
              products in no time, freeing you to focus on what you do best:
              creating awesome stuff!
            </p>
            <button className="w-32 h-9 bg-[#FF6701] p-3 rounded-xl text-white flex justify-center items-center cursor-pointer mx-auto lg:mx-0 my-3 lg:my-7">
              Download
            </button>
            <div className="flex justify-center lg:justify-start gap-2">
              <img src={appStore} className="cursor-pointer" alt="" />
              <img src={googlePlay} className="cursor-pointer" alt="" />
            </div>
          </div>
          <div className=" lg:w-2/4">
            <div className="lg:relative">
              <img src={dotBox} className="hidden lg:block ml-20" alt="" />
              <img
                src={mobileScreen1}
                className="mx-auto lg:ml-20 my-3 lg:absolute top-1 left-8"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverArea;
