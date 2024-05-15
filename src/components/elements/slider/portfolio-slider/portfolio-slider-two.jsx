import React from "react";
import PortfolioImgOne from "@assets/img/portfolio/p-details/file/1.jpeg";

import PortfolioImgThree from "@assets/img/portfolio/p-details/file/3.jpeg";
import PortfolioImgFour from "@assets/img/portfolio/p-details/file/4.jpeg";
import PortfolioImgFive from "@assets/img/portfolio/p-details/file/5.jpeg";
import PortfolioImgsix from "@assets/img/portfolio/p-details/file/6.jpeg";
import PortfolioImgseven from "@assets/img/portfolio/p-details/file/7.jpeg";
import PortfolioImgeight from "@assets/img/portfolio/p-details/file/8.jpeg";
import Image from "next/image";
//swipper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const PortfolioSliderTwo = () => {
  const portfolioImg = [
    {
      id: 1,
      image: PortfolioImgOne,
    },
    
    {
      id: 3,
      image: PortfolioImgThree,
    },
    {
      id: 4,
      image: PortfolioImgFour,
    },
    {
      id: 5,
      image: PortfolioImgFive,
    },
    {
      id: 6,
      image: PortfolioImgsix,
    },
    {
      id: 7,
      image: PortfolioImgseven ,
    },
    {
      id: 8,
      image: PortfolioImgeight,
    },
  ];
  return (
    <>
      <div className="case-slider-area section-spacing wow fadeInUp" data-wow-delay="0.3s">
        <div className="portfolio-slider-active slider-drag">
          <div>
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              observeParents={true}
              observer={true}
              breakpoints={{
                1200: {
                  slidesPerView: "auto",
                },
                992: {
                  slidesPerView: "auto",
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
                576: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: "auto",
                },
              }}
            >
              {portfolioImg.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="case-slider-item">
                      <Image
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSliderTwo;
