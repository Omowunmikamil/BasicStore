import React from "react";
import { assets } from "../assets/assets";

const Banners = () => {
  return (
    <div className="my-14 relative">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 my-6">
        <div className="flex justify-center h-[260px] md:h-[400px]">
          <img
            src={assets.hero2}
            alt="Hero 2"
            className="w-full z-4 rounded-xl"
          />
          <div className="absolute z-20 top-0 left-[0.5rem] md:left-[3rem] lg:left-0 bottom-[16rem] md:bottom-[24rem] lg:bottom-0 text-white flex flex-col justify-center ml-4 lg:ml-14">
            <h2 className="text-2xl sm:text-4xl mb-0 text-white font-bold">
              20% Off on Laptops
            </h2>
            <p className="text-sm sm:text-base mt-2 text-gray-200">
              products on sale for limited time only.
            </p>
            <button className="bg-white text-sm sm:text-base rounded-full w-5/12 py-2 text-gray-700 mt-4 sm:mt-6 hover:bg-gray-100">
              Shop it now
            </button>
          </div>
        </div>

        <div className="flex justify-center h-[260px] md:h-[400px]">
          <img
            src={assets.hero3}
            alt="Hero 3"
            className="w-full z-4 rounded-xl"
          />
          <div className="absolute z-20 top-[15.3rem] md:top-[24.5rem] lg:top-0 left-[0.5rem] md:left-[3rem] lg:left-[35.5rem] lg:bottom-0 text-white flex flex-col justify-center ml-4 lg:ml-14">
            <h2 className="text-2xl sm:text-4xl mb-0 text-white font-bold">
              Apple collections
            </h2>
            <p className="text-sm sm:text-base mt-2 text-gray-200">
              get your best apple products.
            </p>
            <button className="bg-white text-sm sm:text-base rounded-full w-7/12 py-2 text-gray-700 mt-4 sm:mt-6 hover:bg-gray-100">
              Shop collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
