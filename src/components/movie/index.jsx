import MovieSliderFive from "@components/elements/slider/movie-slider/movie-slider-five";
import MovieSliderFour from "@components/elements/slider/movie-slider/movie-slider-four";
import MovieSliderSix from "@components/elements/slider/movie-slider/movie-slider-six";
import MovieSliderThere from "@components/elements/slider/movie-slider/movie-slider-there";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import LandingBannerArea from "./landing-banner-area";
import MovieSectionSix from "./movie-section-six";
import ContactSection from "@components/common/contact/contact-area";
import MovieSliderSeven from "@components/elements/slider/movie-slider/movie-slider-seven";
import VideoAreaSection from "@components/home-two/video-area-section";
import FaqSection from "@components/portfolo-details-page/faq-section";
import BgImage from "@assets/img/logo/mainbackground.png";
const index = () => {
  return (
    <>
      <Header />
      <main>
        
        <div
        className="fm-breadcrumb-area breadcrumb-style"
        style={{ backgroundImage: `url(${BgImage.src})` , height:"510px"}}
      >
</div>
      

      <VideoAreaSection /> 
        {/* <MovieSliderFour />
        <MovieSliderFive /> */}
        <MovieSliderSix />
        {/* <LandingBannerArea />
        <MovieSectionSix />
        <MovieSliderSeven /> */}
        {/* <FaqSection/> */}
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
