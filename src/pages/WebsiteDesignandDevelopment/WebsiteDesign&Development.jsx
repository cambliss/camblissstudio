import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Header } from "@layout/index";
import FaqSection from "@components/portfolo-details-page/faq-section";
import GallarySection from "@components/portfolo-details-page/gallary";
import StepAreaSection from "@components/service-details/step-area-section";
import useGlobalContext from "@hooks/use-context";
import PricingSection from "@components/service/pricing-section";
import imageTwo from "@assets/img/web/enchant.png";
import imageThree from "@assets/img/web/plushkins.png";
import imageFour from "@assets/img/web/justmoveit.png";
import imageFive from "@assets/img/web/flic.png";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { SwiperSlide } from "swiper/react";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";

const Websitedesignanddevelopment = ({ id }) => {
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

  const stepData = [
    {
      id: 1,
      title: "Define Objectives",
      description: "Clearly understand the project's goals and conduct research to grasp user needs and preferences.",
    },
    {
      id: 2,
      title: "Create User Personas",
      description: "Develop personas representing different user types to guide design decisions based on user research.",
    },
    {
      id: 3,
      title: "Wireframing",
      description: "Organize content and create a basic structure for the interface, focusing on layout and functionality.",
    },
    {
      id: 4,
      title: "Prototyping",
      description: "Build interactive prototypes to simulate user interactions. Test and refine the flow to ensure a smooth experience.",
    },
    {
      id: 5,
      title: "Visual Design",
      description: "Apply the visual layer to wireframes, incorporating brand and appealing design with attention to color, typography, and imagery.",
    },
    {
      id: 6,
      title: "Usability Testing",
      description: "Conduct usability tests with real users to identify any issues or improvements. Use feedback to refine the design.",
    },
    {
      id: 7,
      title: "Development Collaboration",
      description: "Work closely with developers during the implementation phase, providing design assets and guidance to ensure accurate execution.",
    },
    {
      id: 8,
      title: "Launch and Monitor",
      description: "Deploy the final design for public use. Monitor user feedback and analytics post-launch, making any necessary adjustments.",
    },
  ];

  const galary_data = [
    { id: 1, img: imageTwo },
    { id: 2, img: imageFour },
    { id: 3, img: imageThree },
    { id: 4, img: imageFive },
 
  ];

  return (
    <>
      <Header />
      <div className="adjust-header-space bg-common-black" style={{ marginTop: "50px" }}></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="page-title-wrapper"></div>
          </div>
        </div>
      </div>

      <div className="breadcrumb-image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}></div>

      <main>
        <section className="case-details-area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12" style={{ position: "relative", zIndex: 2 }}>
                <br /><br />
                <h4 className="case-subtitle mb-25">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  At our company, we take pride in delivering professional website design and development services. Our team of experts combine their technical skills with a deep understanding of user experience to create websites that exude professionalism and credibility. Cambliss specializes in creating powerful website design and development solutions that go beyond aesthetics. Our team of skilled designers and developers leverage their expertise to craft websites that are not only visually stunning but also highly functional and effective.
                </p>
                <h4 className="case-subtitle mb-25">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
                        fill="#BCA045"
                      />
                    </svg>
                  </span>
                  WHAT WE DO
                </h4>
                <p className="mb-30">
                  <strong>Web Design</strong><br />
                  We create websites that are visually appealing and highly functional. Our team of talented designers carefully crafts each element of your website, ensuring a seamless and intuitive user interface.
                </p>
                <p className="mb-30">
                  <strong>Custom Icons</strong><br />
                  Cambliss' talented team of designers specializes in creating unique and captivating visuals that perfectly align with your brand's identity and messaging.
                </p>
                <p className="mb-30">
                  <strong>UI / UX</strong><br />
                  We craft visually appealing and user-friendly designs that not only capture attention but also guide users through your website or application effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
    <section className="design-area wow fadeInUp" data-wow-delay="0.3s">
  <h4 className="case-subtitle">
    <span>
      <CaseSubtitleIcon />
    </span>
    Gallery
  </h4>
  <div className="design-humb-grid">
    {galary_data &&
      galary_data.map((item) => (
        <div key={item.id} className="design-thumb img-tilt all__item-fade">
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
            <StepAreaSection stepData={stepData} />
        {/* <FaqSection />
        <PricingSection /> */}
          {/* <FaqSection /> */}
       <SwiperSlide />
        {/* <PricingSection /> */}
       
        <ContactSection />
      </main>
      <FooterOne />
   
    </>
  );
};

export default Websitedesignanddevelopment;
