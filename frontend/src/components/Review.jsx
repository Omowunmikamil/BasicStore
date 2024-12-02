import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { assets } from "../assets/assets";
const Review = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="review-swiper relative"
      >
        {assets.reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-start py-8 px-10 w-full md:w-[22.5rem] bg-white rounded-xl shadow-md border border-tesBorder">
              <p className="text-sm text-gray-500">{review.text}</p>
              <img src={assets.stars} alt="Stars" className="w-20 mt-5 mb-1" />
              <p className="text-xs font-bold">{review.author}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination mt-5 text-center"></div>
      </Swiper>
    </div>
  );
};

export default Review;
