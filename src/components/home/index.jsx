import React from 'react';

import { Header } from '@layout/index';
import HeroOne from '@components/elements/slider/hero-slider/hero-one';
import HomeAboutOne from '../abouts/home-about-one';
import ServiceSection from './service-section';
import FilmsArea from './portfolio-section';
import TestimonialOne from '@components/elements/slider/testimonial-slider/testimonial-slider-one';
import TeamSection from '../common/team/team-section';

import FooterOne from '@layout/footers/footer-one';
import ContactSection from '@components/common/contact/contact-area';
import PricingSection from '@components/service/pricing-section';
import CertificateSlider from '@components/elements/slider/certificate-slider';
import Technology from './technology';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <HeroOne />
                <HomeAboutOne />
                <ServiceSection />
                <FilmsArea />
                {/* <TestimonialOne /> */}
               <Technology/>
                {/* <TeamSection /> */}
                <CertificateSlider/>
                {/* <PricingSection/> */}
                <ContactSection />
            </main>
            <FooterOne />
        </>
    );
};

export default index;