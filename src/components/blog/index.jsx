import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import SectionTitle from "./section-title";
import PostBoxArea from "./postbox-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <>
      <Header />
      <main>
<<<<<<< HEAD
      <Breadcrumb />
=======
      <Breadcrumb title="Careers" subTitle="Careers" />
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
        <SectionTitle />
        <PostBoxArea />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
