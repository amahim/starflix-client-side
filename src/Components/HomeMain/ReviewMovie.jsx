import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ReviewMovie = ({ reviews }) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
        style={{ paddingBottom: "40px" }}
      >
        {reviews.map((review) => {
          const { img, name, rev, id } = review;
          return (
            <SwiperSlide key={id}>
              <div className="sm:h-[250px] md:h-[250px] lg:h-[230px] border-2 p-4 rounded-xl border-[#37f51e] bg-[#e9e7e717] flex flex-col justify-between">
                <p className="text-center text-white">{rev}</p>
                <div className="text-center flex flex-col items-center">
                  <img
                    src={img}
                    alt={name}
                    className="mt-2 w-16 rounded-full border-[#37f51e] border-2 p-1"
                  />
                  <h1 className="text-center text-lg font-medium mt-2 text-white">
                    {name}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewMovie;
