import { assets } from "../assets/assets";

const HerderBanner = (props) => {
  return (
    <div className="w-full relative">
      <img
        src={assets.pageHeaderBg}
        alt="Herder Background Image"
        className="z-2 h-[150px] md:h-[250px] w-full"
      />
      <div className="absolute z-10 top-0 bottom-0 w-full text-white flex flex-col justify-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-2 md:mb-4">
          {props.h1}
        </h1>
        <div className="flex justify-center">
          <div className="flex justify-between w-32 md:w-40">
            <a
              href="/"
              className="text-sm md:text-base text-gray-100 text-center"
            >
              {props.text1}
            </a>
            <span className="text-sm md:text-base text-gray-100 text-center">
              &gt;
            </span>
            <a
              href={props.href}
              className="text-sm md:text-base text-gray-100 text-center"
            >
              {props.text2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerderBanner;
