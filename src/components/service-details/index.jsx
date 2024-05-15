import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import CaseQouteArea from "@components/portfolo-details-page/case-quote-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import ServiceDetails from "./service-details";
import PricingSection from "@components/service/pricing-section";
import imageOne from "@assets/img/logo/mainbackground.png";

const index = ({ id }) => {
  return (
    <>
    
        
      {/* <Breadcrumb title="Website Design &amp; Development" subTitle="Website Design &amp; Development" /> */}
        {/* <Breadcrumb title="Service" subTitle="Website Design & Development" /> */}
        <ServiceDetails id={id} />
        {/* <CaseQouteArea /> */}
        {/* <PricingSection/> */}
        <ContactSection />
    
      <FooterOne />
    </>
  );
};

export default index;
