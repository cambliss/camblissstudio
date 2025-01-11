import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ModalVideo from "react-modal-video";
// import one from "@assets/img/ouwork/1.png"
import two from "@assets/img/ouwork/2.png"
import three from "@assets/img/ouwork/3.png"
import four from "@assets/img/ouwork/4.png"
import five from "@assets/img/ouwork/5.png"
import six from "@assets/img/ouwork/6.png"
import seven from "@assets/img/ouwork/7.png"
const categoriesData = {
  WebsiteDesign: [
    {
      _id: "1",
      title: "Website Design ",
      image: two,
      url: "/WebsiteDesignandDevelopment",
    },
  ],
  Branding: [
    {
      _id: "2",
      title: "Branding ",
      image: five,
      url: "/branding",
    },
  ],
  Animation: [
    {
      _id: "3",
      title: "Animation",
      image: three,
      url: "/Animation",
    },
  ],
  uiux: [
    {
      _id: "4",
      title: "UI/UX",
image: four,

      url: "/UI-UX",
    },
  ],
//   DigitalMarketing: [
//     {
//       _id: "5",
//       title: "Digital Marketing",
// image: one,
//       url: "/Digital-Marketing",
//     },
//   ],

  Advertisement: [
    {
      _id: "6",
      title: "Advertisement",
image : six,
      url: "/Advertisement",
    },
  ],
  InteriorDesigning: [
    {
      _id: "7",
      title: "Interior Designing",
image : seven,
      url: "/InteriorDesigning",
    },
  ],
 IntegratedCloudBussinessSolutions: [
    {
      _id: "8",
      title: "Integrated Cloud Bussiness Solutions",
image : seven,
      url: "/IBS",
    },
  ],
};

const MovieSliderSix = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [videoUrl, setVideoUrl] = useState(" ");
  const [videoUrl] = useState(" ");

  // const [activeCategory, setActiveCategory] = useState("WebsiteDesign");
  const [ setActiveCategory] = useState("WebsiteDesign");

  // const openVideoModal = (id) => {
  //   setIsOpen(!isOpen);
  //   setVideoUrl(id);
  // };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
    
      <div className="fm-landing-trending-area bg-common-black section-spacing" style={{paddingBottom:"0px", paddingTop:"100px"}}>
        <div className="container">
          <div
            className="row align-items-center g-5 section-title-spacing-small wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7">
              <h4 className="fm-landing-section-title text-white fade_bottom_3">
             Browse By Genre
              </h4>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div className="fm-landing-trending-slider-navigation fade_bottom_3 text-sm-end">
                <span
                  className="fm-landing-premium-prev"
                  onClick={() => handleCategoryChange("WebsiteDesign")}
                >
                  <i className="fa-light fa-angle-left"></i>
                </span>
                <span
                  className="fm-landing-premium-next"
                  onClick={() => handleCategoryChange("WebsiteDesign")}
                >
                  <i className="fa-light fa-angle-right"></i>
                </span>
                {/* <span className="fm-landing-viewall-text">
                  <Link href="/movie">View All</Link>
                </span> */}
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.4s">
            <div className="col-xl-12">
              <div className="fm-landing-trending-slider-wrapper">
                <div className="fm-landing-premium-slider-active">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    centeredSlides={false}
                    navigation={{
                      nextEl: ".fm-landing-premium-next",
                      prevEl: ".fm-landing-premium-prev",
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                      1400: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    {Object.keys(categoriesData).map((category) => (
                      <React.Fragment key={category}>
                        {categoriesData[category].map((item) => (
                          <SwiperSlide key={item._id}>
                            <div className="fm-landing-trending-single">
                              <div className="fm-landing-trending-single-img">
                                <Link href={item.url}>
                                  
                                    <Image
                                      src={item.image}
                                      width={500}
                                      height={500}
                                      style={{ width: "100%", height: "auto" }}
                                      alt="Service Image"
                                    />
                                 
                                </Link>
                                <br/><br/>
                                <p>{item.title}</p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </React.Fragment>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        autoPlay
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MovieSliderSix;
