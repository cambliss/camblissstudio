import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import SectionTitle from "./section-title";
import PostBoxArea from "./postbox-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import BenefitsSection from "./BenefitSection";
import JobOpeningsSection from "./JobOpenings";
const index = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb />
        <SectionTitle />
        {/* <PostBoxArea /> */}
<BenefitsSection/>
<JobOpeningsSection/>
      </main>
      <FooterOne />
    </>
  );
};

export default index;
