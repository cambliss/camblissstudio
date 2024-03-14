import HomeAboutFour from '@components/abouts/home-about-four';
import HeroSliderTwo from '@components/elements/slider/hero-slider/hero-slider-two';
import { Header } from '@layout/index';
import React from 'react';
import HistorySectionFour from './history-section-four';
import PortFolioSectionFour from './portfolio-section-four';
import TestimonialSliderTwo from '@components/elements/slider/testimonial-slider/testimonial-slider-two';
import VideoSectionFour from './video-section-four';
import BlogSectionFour from './blog-section-four';
import CertificateSlider from '@components/elements/slider/certificate-slider';
import ContactSection from '@components/common/contact/contact-area';
import FooterOne from '@layout/footers/footer-one';
import TeamSection from '@components/common/team/team-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
const index = () => {
    return (
        <>
        <Header /><br/><br/>
        <main>
      <Breadcrumb/>
        {/* <Breadcrumb title="About Us" subTitle="About Us" />  */}
          <HomeAboutFour/>
          <HistorySectionFour/>
          <PortFolioSectionFour/>
          <TeamSection/>
          {/* <TestimonialSliderTwo/> */}
          {/* <VideoSectionFour/> */}
          <BlogSectionFour/>
          <CertificateSlider/>
          <ContactSection/>
        </main>
        <FooterOne/>
        </>
    );
};

export default index;