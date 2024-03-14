

import React, { useEffect } from "react";
import axios from "axios";
// import Header from "@layout/header";
import ServiceMiddle from "./service-middle";
import GallarySection from "@components/portfolo-details-page/gallary";
import StepAreaSection from "./step-area-section";
import useGlobalContext from "@hooks/use-context";
import { Header } from "@layout/index";
import imageOne from "@assets/img/logo/websitehero.png";

const ServiceDetails = ({ id }) => {
  // Get data
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
  );
};

export default ServiceDetails;
