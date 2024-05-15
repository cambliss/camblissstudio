
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

import imageOne from "@assets/img/logo/Untitled design(4)/1.png";  
import imageTwo from "@assets/img/logo/Untitled design(4)/2.png";  
import imageThree from "@assets/img/logo/Untitled design(4)/branding6.png";  
import imageFour from "@assets/img/logo/brandingimagenew.jpg";  
import imageFive from "@assets/img/logo/Untitled design(4)/5.png";  

import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Branding = ({ id }) => {
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
      title: "Purpose and Values",
      description: "Define the mission, vision, and core values of the brand that elevates each and every need of th bussiness.",
    },
    {
      id: 2,
      title: "Target Audience",
      description: "Understand the demographics, preferences, and behaviors of the intended audience.",
    },
    {
      id: 3,
      title: "Market Research",
      description: "Analyze competitors and industry trends to identify opportunities and differentiators.",
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Develop and design a distinctive name, logo, color palette, and typography for the brand.",
    },
    {
      id: 5,
      title: "Brand Story",
      description: "Create a narrative that communicates the brands history, values, and mission.",
    },
    {
      id: 6,
      title: "Visual Language",
      description: "Ensure consistency in design elements across all brand materials.",
    },
    {
      id: 7,
      title: "Brand Guidelines",
      description: "Establish rules for the proper use of brand elements to maintain consistency.",
    },
    {
      id: 8,
      title: "Online Presence",
      description: "Build a user-friendly website and leverage social media for brand visibility.",
    },
    {
      id: 9,
      title: "Content Development",
      description: "Create content that aligns with the brands voice, values, and resonates with the audience.",
    },
    {
      id: 10,
      title: "Brand Advocacy",
      description: "Encourage customer reviews, testimonials, and user-generated content.",
    },
    {
      id: 11,
      title: "Adaptation",
      description: "Stay attuned to market changes and adapt the brand strategy accordingly.",
    },
  ];
  const galary_data = [
    {
      id: 1,
      img: imageOne,
    },
    {
      id: 2,
      img: imageTwo,
    },
    {
      id: 3,
      img: imageFour,
    },
    {
      id: 4,
      img: imageThree,
    },
    {
      id: 5,
      img: imageFive,
    },
  ];
  
  return (
    <>
        <Header />
      <div className="adjust-header-space bg-common-black"></div>
      <div className="fm-breadcrumb-area breadcrumb-style" style={{ backgroundImage: `url(${imagehero.src})`, paddingTop: '400px', position: 'relative' }}>
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
  <h4 className="case-subtitle mb-25 ">
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
        
      </p>
      <p className="mb-45 ">
        {" "}
        Are you in search of innovative and distinctive visual identities to elevate your brand? Look no further; we are here to bring your brand to life through creative design solutions. Our team is ready to collaborate with you in crafting a fresh and unique visual identity that perfectly aligns with your brands essence. Lets embark on this creative journey together, ensuring your brand stands out and makes a lasting impression.
      </p>
      <p className="mb-45 ">
        {" "}
        Cambliss works closely with clients with a team of experienced brand strategists and designers to understand their bussiness objectives and target audience, our approach to branding is collaborative, involving clients in every step of the process to ensure their brand vision is accurately captured
      </p>
    <section className="design-area wow fadeInUp" data-wow-delay="0.3s">
      <h4 className="case-subtitle">
        <span>
          <CaseSubtitleIcon />
        </span>
        Gallery
      </h4>
      <div className="design-humb-grid ">
          {galary_data &&
            galary_data.map((item) => (
              <div className="design-thumb img-tilt all__item-fade common-galary-icons" key={item.id}>
                <Image
                  src={item.img}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
            ))}
        </div>
      {/* <PhotoProvider
      speed={() => 800}
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"}
      >
        <div className="design-humb-grid ">
          {galary_data &&
            galary_data.map((item) => (
              <PhotoView key={item.id} src={item.img.src}>
                <div className="design-thumb img-tilt all__item-fade common-galary-icons">
                  <Image
                    src={item.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                  <div className="common-galary-icon">
                    <i className="fal fa-plus fm-film-video-btn"></i>
                  </div>
                </div>
              </PhotoView>
            ))}
        </div>
      </PhotoProvider> */}
    </section>
    </div>
 


        {/* <StepAreaSection /> */}
        {/* <FaqSection /> */}
        {/* <CaseQouteArea /> */}
        {/* <PricingSection /> */}
     
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default Branding;
