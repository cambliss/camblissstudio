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
import imageOne from "@assets/img/logo/uiuxhero.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import imageTwo from "@assets/img/logo/uiux1.png"
import imageThree from "@assets/img/logo/uiux2.png"
import imageFour from "@assets/img/logo/uiux3.png"
import imageFive from "@assets/img/logo/uiux4.png"
import imagesix from "@assets/img/logo/uiux5.png"
import imageseven from "@assets/img/logo/uiux6.png"

import imageeight from "@assets/img/logo/uiux7.png"

import imagenine from "@assets/img/logo/uiux8.png"


import { SwiperSlide } from "swiper/react";




const UiUx = ({ id }) => {
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

  const manuallyWrittenServices = [
    {
      _id: "1",
      serviceNum: "01",
      title: "Website Design & Development",
      description:
        "Our website design & development services are tailored to meet the unique needs of your business",
      serviceBtn: "Learn More",
      delay: "0.3s",
    },
    {
      _id: "2",
      serviceNum: "02",
      title: "Branding & Creative Services",
      description:
        "Our approach to branding is collaborative involving clients in every step to capture your vision.",
      serviceBtn: "Learn More",
      delay: "0.4s",
    },
    {
      _id: "3",
      serviceNum: "03",
      title: "Animation",
      description:
        "We bring your imagination to life through stunning 2D & 3D animations and captivate the audience.",
      serviceBtn: "Learn More",
      delay: "0.5s",
    },
    {
      _id: "4",
      serviceNum: "04",
      title: "UI/UX",
      description: "Cambliss specializes in UI/UX, Where your Functionality Meets Aesthetics.",
      serviceBtn: "Learn More",
      delay: "0.6s",
    },
    {
      _id: "5",
      serviceNum: "05",
      title: "Digital Marketing",
      description:
        "From SEO to PPC advertising to social media marketing, cambliss covers all aspects of marketing.",
      serviceBtn: "Learn More",
      delay: "0.6s",
    },
    {
      _id: "6",
      serviceNum: "06",
      title: "Visual Production",
      description: "A Mix of Everything just for you.",
      serviceBtn: "Learn More",
      delay: "0.6s",
    },
  ];
  const stepData = [
    {
      id: 1,
      title: "Define Objectives ",
      description: "Clearly understand the project's goals and conduct research to grasp user needs and preferences.",
    },
    {
      id: 2,
      title: "Create User Personas",
      description: "Develop personas representing different user types to guide design decisions based on user .",
    },
    {
      id: 3,
      title: "Wireframing ",
      description: "Organize content and create a basic structure for the interface Focusing on layout and functionality.",
    
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
    {
      id: 1,
      img: imageTwo,
    },
    
    {
      id: 2,
      img: imageFour,
    },
    {
      id: 3,
      img: imageThree,
    },
    {
      id: 4,
      img: imageFive,
    },
    {
      id: 5,
      img: imagesix,
    },

    {
      id: 6,
      img: imageseven,
    },
    {
      id: 7,
      img: imageeight,
    },
    {
      id: 8,
      img: imagenine,
    },
  ];
  return (
    <>
       <Header />
      <div className="adjust-header-space bg-common-black"></div>
      <div className="fm-breadcrumb-area breadcrumb-style" style={{ backgroundImage: `url(${imageOne.src})`, paddingTop: '400px', position: 'relative' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="page-title-wrapper" style={{ marginTop: '-300px' }}>
                {/* <h1 className="page-title">Advertisement</h1> */}
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
              <div className="col-xxl-12" style={{ position: 'relative', zIndex: 2 }}>
                {/* <div className="case-details-thumb" style={{ marginTop: '-100px' }}>
                  <Image
                    data-speed="auto"
                    src={imageOne}
                    style={{ width: "100%", height: "100%" }}
                    alt="image not found"
                  />
                </div> */}
                <br/><br/>
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
                <p className="mb-55 ">
                we believe in the transformative power of great design. Our passion is to create user interfaces and experiences that not only look visually appealing but also function seamlessly. With a focus on user-centric design principles, we strive to elevate your digital presence and leave a lasting impression on your audience.
                We understand that collaboration is key to success. We work closely with our clients to understand their vision, goals, and brand identity. Your input is invaluable in shaping the final design.We strive to infuse innovation into every design element, ensuring your product stands out in a crowded digital landscape.


                </p>
                {/* <p className="mb-45 ">
                  {" "}
                  We understand that collaboration is key to success. We work closely with our clients to understand their vision, goals, and brand identity. Your input is invaluable in shaping the final design.We strive to infuse innovation into every design element, ensuring your product stands out in a crowded digital landscape.
                </p>
                <p className="mb-45 ">
                  {" "}
                  Our team of skilled designers brings years of experience and a deep understanding of industry trends to the table. We stay abreast of the latest design technologies and methodologies to deliver cutting-edge solutions.
                </p> */}
              
                {/* <h4 className="case-subtitle mb-25">
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
                  WHAT WE DO
                </h4>
                <p className="mb-30 ">
                  <strong>User Interface (UI) Design</strong><br />
                  Our UI design process focuses on creating visually stunning interfaces. From wireframing to the final polished design, we ensure every element contributes to an aesthetically pleasing and user-friendly experience.                </p>
                <p className="mb-30 ">
                  <strong>User Experience (UX) Design</strong><br />
                  User satisfaction is at the core of our UX design philosophy. We meticulously craft user journeys, conduct usability testing, and iterate to create a seamless and enjoyable experience for your audience.                </p>
                <p className="mb-30 ">
                  <strong>Prototyping and Testing</strong><br />
                  We believe in refining designs through prototyping and user testing. This iterative approach allows us to identify and address potential issues early in the design process, resulting in a more robust end product.                </p>
                <p className="mb-30 ">
                  <strong>Responsive Design</strong><br />
                  In a digital landscape where users access content on various devices, we prioritize responsive design. Your interface will look and function flawlessly across desktops, tablets, and smartphones.
                </p> */}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="step-area section-spacing-top">
      <div className="container">
        <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="section-main-title title-anim step-main-title">
                Steps To Success
              </h2>
            </div>
          </div>
        </div>
        <div className="step-main-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <div className="row g-5">
            {stepData.map((item) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                key={item.id}
              >
                <div className="step-item fade_bottom">
                  <div className="step-content">
                    <div className="step-content-heading">
                      <h4 className="step-title">{item.title}</h4>
                      <span className="step-number">{item.number}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section > */}
    <br/><br/>
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
        {/* <FaqSection /> */}
       <SwiperSlide />
        {/* <PricingSection /> */}
       
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default UiUx;
