import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-2.5">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="flex justify-center h-[300px] md:h-[700px] relative">
            <img
              src={assets.hero1}
              alt="Hero 1"
              className="w-full z-4 rounded-xl"
            />
            <div className="absolute z-20 top-0 left-0 bottom-0 text-white flex flex-col justify-center ml-4 md:ml-14 lg:ml-24">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Iphone 15 series
              </h1>
              <p className="text-sm sm:text-base mt-2 text-gray-200">
                Limited stocks available. Grab it now!
              </p>
              <button className="bg-white text-sm sm:text-base rounded-full w-7/12 py-2 text-gray-700 mt-4 sm:mt-6 hover:bg-gray-100">
                Shop collection
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[300px] md:h-[700px]">
            <img
              src={assets.hero2}
              alt="Hero 2"
              className="w-full z-4 rounded-xl"
            />
            <div className="absolute z-20 top-0 left-0 bottom-0 text-white flex flex-col justify-center ml-4 md:ml-14 lg:ml-24">
              <h1 className="text-3xl sm:text-5xl font-bold">
                20% Off on Laptops
              </h1>
              <p className="text-sm sm:text-base mt-2 text-gray-200">
                products on sale for limited time only.
              </p>
              <button className="bg-white text-sm sm:text-base rounded-full w-5/12 py-2 text-gray-700 mt-4 sm:mt-6 hover:bg-gray-100">
                Shop it now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[300px] md:h-[700px]">
            <img
              src={assets.hero3}
              alt="Hero 3"
              className="w-full z-4 rounded-xl"
            />
            <div className="absolute z-20 top-0 left-0 bottom-0 text-white flex flex-col justify-center ml-4 md:ml-14 lg:ml-24">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Apple collections
              </h1>
              <p className="text-sm sm:text-base mt-2 text-gray-200">
                get your best apple products.
              </p>
              <button className="bg-white text-sm sm:text-base rounded-full w-7/12 py-2 text-gray-700 mt-4 sm:mt-6 hover:bg-gray-100">
                Shop collection
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
