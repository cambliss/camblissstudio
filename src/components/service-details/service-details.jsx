<<<<<<< HEAD
import FaqSection from "@components/portfolo-details-page/faq-section";
import GallarySection from "@components/portfolo-details-page/gallary";
import React from "react";
import StepAreaSection from "./step-area-section";
// import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";
import ServiceMiddle from "./service-middle";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import useGlobalContext from "@hooks/use-context";
import { useEffect } from "react";
import axios from "axios";

const ServiceDetails = ({ id }) => {
  //get data
=======


import React, { useEffect } from "react";
import axios from "axios";
// import Header from "@layout/header";
import ServiceMiddle from "./service-middle";
import GallarySection from "@components/portfolo-details-page/gallary";
import StepAreaSection from "./step-area-section";
import useGlobalContext from "@hooks/use-context";
import { Header } from "@layout/index";
import imageOne from "@assets/img/logo/mainbackground.png";

const ServiceDetails = ({ id }) => {
  // Get data
>>>>>>> master
  const { setService } = useGlobalContext();
  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.BASE_URL}service/all-service/${id}`)
        .then((res) => {
          setService(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id, setService]);

  return (
<<<<<<< HEAD
    <section className="case-details-area">
      <div className="container">
        <div className="row">
          <ServiceMiddle />
        </div>
      </div>
      {/* <PortfolioSliderTwo /> */}
      <div
        className="container section-spacing-bottom wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-xxl-12">
          <GallarySection />

            {/* <h4 className="case-subtitle mb-25"> */}
              {/* <span>
                <CaseSubtitleIcon />
              </span>
              Objective
            </h4>
            <p className="mb-55 ">
              One of the largest food retailers needed to automate inspection
              and maintenance processes in their stores and update their
              troubleshooting reports. Retail companies have notoriously complex
              requirements when it comes to ongoing maintenance, and manual
              inspections can limit the ability to report and verify current
              conditions. The choice of font and font size with which Lorem
              ipsum is reproduced answers to specific needs that go beyond the
              simple and simple filling of spaces dedicated to accepting real
              texts and allowing to have hands an advertising/publishing
              product, both web and paper, true to reality.
            </p>
            <p className="">
              {" "}
              One of the main objectives for the new site was to attract new
              business and leave a memorable impression on (often busy) brand
              representatives and ad agencies. Secondary objective was to
              present Ali’s story in an immersive way in order to connect with
              his audience and express his love for storytelling and typography.
            </p> */}

            <StepAreaSection />
            {/* <FaqSection /> */}
        
            {/* <div className="text-latout">
              <p className="mb-55 ">
                One of the largest food retailers needed to automate inspection
                and maintenance processes in their stores and update their
                troubleshooting reports. Retail companies have notoriously
                complex requirements when it comes to ongoing maintenance, and
                manual inspections can limit the ability to report and verify
                current conditions. The choice of font and font size with which
                Lorem ipsum is reproduced answers to specific needs that go
                beyond the simple and simple filling of spaces dedicated to
                accepting real texts and allowing to have hands an
                advertising/publishing product, both web and paper, true to
                reality.
              </p>
              <p className="">
                One of the main objectives for the new site was to attract new
                business and leave a memorable impression on (often busy) brand
                representatives and ad agencies. Secondary objective was to
                present Ali’s story in an immersive way in order to connect with
                his audience and express his love for storytelling and
                typography.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
=======
    <>
  <Header/>
      <div className="adjust-header-space bg-common-black"></div>
      <div className="fm-breadcrumb-area breadcrumb-style" style={{ backgroundImage: `url(${imageOne.src})`, paddingTop: '400px', position: 'relative' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="page-title-wrapper" style={{ marginTop: '-300px' }}>
                {/* <h1 className="page-title">Branding & Creative Services</h1> */}
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-image-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></div>
      </div>
      <main>
        <section className="case-details-area">
          <div className="container">
            <div className="row">
              <ServiceMiddle />
            </div>
          </div>
          <div class="container">
          <GallarySection />
          </div>
       
          {/* <StepAreaSection /> */}
        </section>
      </main>
    </>
>>>>>>> master
  );
};

export default ServiceDetails;
