import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import SectionTitle from "./section-title";
import PostBoxArea from "./postbox-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
<<<<<<< HEAD
import BenefitsSection from "./BenefitSection";
import JobOpeningsSection from "./JobOpenings";
=======

>>>>>>> 886602eb8f2b62eb03397aa8f625347feb9ef54c
const index = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb />
        <SectionTitle />
<<<<<<< HEAD
        {/* <PostBoxArea /> */}
<BenefitsSection/>
<JobOpeningsSection/>
=======
        <PostBoxArea />
>>>>>>> 886602eb8f2b62eb03397aa8f625347feb9ef54c
      </main>
      <FooterOne />
    </>
  );
};

export default index;
