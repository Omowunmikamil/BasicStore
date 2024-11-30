import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="my-10">
      <h2>Our Customer’s Review</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start py-8 px-8 bg-white rounded-xl shadow-md border border-tesBorder">
              <p className="text-sm text-gray-500">
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi.”
              </p>
              <img src={assets.stars} alt="" className="w-20 pt-4 pb-1" />
              <p className="text-xs font-cold">Emma Chamberlin</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start py-8 px-8 bg-white rounded-xl shadow-md border border-tesBorder">
              <p className="text-sm text-gray-500">
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi.”
              </p>
              <img src={assets.stars} alt="" className="w-20 pt-4 pb-1" />
              <p className="text-xs font-cold">Thomas John</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-start py-8 px-8 bg-white rounded-xl shadow-md border border-tesBorder">
              <p className="text-sm text-gray-500">
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi.”
              </p>
              <img src={assets.stars} alt="" className="w-20 pt-4 pb-1" />
              <p className="text-xs font-cold">Kevin Bryan</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
