import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import React from "react";
import ShopArea from "./shop-area";
<<<<<<< HEAD
import HeaderThere from "@layout/headers/header-there";
=======
import HeaderThere from "@layout/headers/header";
>>>>>>> master
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <>
      <HeaderThere />
      <main>
<<<<<<< HEAD
        <Breadcrumb title="Shop Sidebar" subTitle="Shop Sidebar" />
=======
        <Breadcrumb/>
>>>>>>> master
        <ShopArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
