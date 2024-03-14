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
      <Breadcrumb title="Careers" subTitle="Careers" />
        <SectionTitle />
        <PostBoxArea />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
