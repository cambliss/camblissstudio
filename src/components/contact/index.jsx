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
        <Breadcrumb  />
=======
        <Breadcrumb title="Contact Us" subTitle="Contact Us" />
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
        <ContactArea />
        <ContactMap />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
