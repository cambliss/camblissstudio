import React from 'react';
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import WebBanner from "@assets/video/C_V/WebBanner.mp4"

const VideoSlider = () => {
   // Define certificate data with three video URLs
   const certificateData = [
      {
         id: 1,
         video: WebBanner,
      },
      {
         id: 2,
         video: WebBanner,
      },
      {
         id: 3,
         video: WebBanner,
      },
      
   ];

   return (
      <div className="certificate-area section-spacing bg-common-black">
         <div className="container">
            <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
               <div className="col-12">
                  <div className="sec-sub">
                     <div className="section-title sec-sub-style  text-center">
                        <span className="section-subtitle">OUR CLIENTS</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="certificate-active wow fadeInUp" data-wow-delay="0.4s">
               <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={10}
                  loop={true}
                  observeParents={true}
                  observer={true}
                  navigation={{
                     nextEl: ".fm-slider-next",
                     prevEl: ".fm-slider-prev",
                  }}
                  autoplay={{
                     delay: 3000,
                     pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                     450: {
                        slidesPerView: 2,
                     },
                     576: {
                        slidesPerView: 2,
                     },
                     768: {
                        slidesPerView: 3,
                     },
                     991: {
                        slidesPerView: 3,
                     },
                     1200: {
                        slidesPerView: 4,
                     },
                     1400: {
                        slidesPerView: 4,
                     },
                  }}
               >
                  {certificateData.map((item) => (
                     <SwiperSlide key={item.id}>
                        <div className="certificate-img1">
                           {/* Use an iframe with the YouTube video URL */}
                           <iframe
                              title={`YouTube Video ${item.id}`}
                              width="100%"
                              height="100%"
                              src={item.video}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                           ></iframe>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="fm-slider-navigation mt-50 wow fadeInUp" data-wow-delay="0.3s">
               <span className="fm-slider-prev slider-nav-btn"><i className="fa-solid fa-arrow-left-long"></i></span>
               <span className="fm-slider-next slider-nav-btn"><i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
         </div>
      </div>
   );
};

export default VideoSlider;
