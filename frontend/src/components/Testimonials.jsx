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
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {assets.reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-start py-8 px-8 bg-white rounded-xl shadow-md border border-tesBorder">
              <p className="text-sm text-gray-500">{review.text}</p>
              <img src={assets.stars} alt="Stars" className="w-20 pt-4 pb-1" />
              <p className="text-xs font-bold">{review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
