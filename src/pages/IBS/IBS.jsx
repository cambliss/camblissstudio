import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import CaseQouteArea from "@components/portfolo-details-page/case-quote-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import FaqSection from "@components/portfolo-details-page/faq-section";
import GallarySection from "@components/portfolo-details-page/gallary";
import StepAreaSection from "@components/service-details/step-area-section";
import useGlobalContext from "@hooks/use-context";
import PricingSection from "@components/service/pricing-section";

import imagehero from "@assets/img/logo/mainbackground.png";
import imageFour from "@assets/img/logo/inventory.jpg";
import imageTwo from "@assets/img/logo/compliances.webp";

import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { PhotoProvider, PhotoView } from "react-photo-view";

const IBS = ({ id }) => {
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


  const galary_data = [
    { id: 1, img: imageFour },
    { id: 2, img: imageTwo },
  ];

  return (
    <>
      <Header />

      <div
        className="adjust-header-space bg-common-black"
        style={{ marginTop: "50px" }}
      ></div>

      <main>
        {/* ----------------------- OBJECTIVE SECTION ----------------------- */}
        <section className="case-details-area">
          <div className="container">
            <div className="row">
              <div
                className="col-xxl-12"
                style={{ position: "relative", zIndex: 2 }}
              >
                <br />
                <br />

                <h4 className="case-subtitle mb-25">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
                        fill="#BCA045"
                      />
                    </svg>
                  </span>
                  OBJECTIVE
                </h4>

                <p className="mb-55">
                  IBS (Integrated Cloud Business Solutions), a flagship division
                  of Cambliss, is dedicated to transforming businesses through
                  intelligent, scalable, and fully integrated cloud technologies.
                  With a commitment to innovation and customer-centric delivery,
                  IBS empowers organizations to modernize their operations,
                  streamline workflows, and build secure digital ecosystems
                  tailored to their vision.
                </p>

                <p className="mb-45">
                  At Cambliss, we strive to create next-generation cloud solutions
                  that not only meet but exceed the expectations of our clients,
                  while maintaining unwavering focus on quality, reliability,
                  and technological excellence. With a team of skilled
                  engineers, strategists, and cloud experts, we go beyond
                  traditional IT boundaries to deliver solutions that truly
                  elevate business performance. By embracing emerging
                  technologies and understanding real-world challenges, IBS
                  ensures your business stands out in today’s competitive
                  digital landscape.
                </p>

                {/* SAFE COMMENT BLOCK — OLD CAMBLISS TEXT REMOVED 
                <p>Old content here...</p>
                */}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------- GALLERY SECTION ----------------------- */}
        <br />
        <br />

        <div className="container">
          <section
            className="design-area wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h4 className="case-subtitle">
              <span>
                <CaseSubtitleIcon />
              </span>
              Gallery
            </h4>

            <div className="design-humb-grid">
              {galary_data.map((item) => (
                <div
                  className="design-thumb img-tilt all__item-fade common-galary-icons"
                  key={item.id}
                >
                  <Image
                    src={item.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <ContactSection />
      </main>

      <FooterOne />
    </>
  );
};

export default IBS;
