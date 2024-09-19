import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
<<<<<<< HEAD
import CaseQouteArea from "@components/portfolo-details-page/case-quote-area";
=======
// import CaseQouteArea from "@components/portfolo-details-page/case-quote-area";
>>>>>>> master
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import ServiceDetails from "./service-details";
<<<<<<< HEAD
import PricingSection from "@components/service/pricing-section";
=======
// import PricingSection from "@components/service/pricing-section";
>>>>>>> master

const index = ({ id }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Service Details" subTitle="Service Details" />
        <ServiceDetails id={id} />
        {/* <CaseQouteArea /> */}
        {/* <PricingSection/> */}
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
