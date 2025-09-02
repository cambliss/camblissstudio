import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import ContactArea from "./contact-area";
import ContactMap from "./contact-map";

const index = () => {
  return (
    <>
      <Header />
      <main>
      
<<<<<<< HEAD
        {/* <Breadcrumb  /> */}
=======
        <Breadcrumb  />
>>>>>>> 886602eb8f2b62eb03397aa8f625347feb9ef54c
        <ContactArea />
        <ContactMap />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
