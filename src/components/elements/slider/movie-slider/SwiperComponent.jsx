
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const SwiperComponent = ({ genres }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      {genres.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="fm-landing-genre-single wow fadeInUp">
            <a href={`/movies?genre=${item.name}`}>
              <div className="fm-landing-genre-name">{item.name}</div>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
