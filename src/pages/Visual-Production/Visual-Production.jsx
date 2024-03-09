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
import imageOne from "@assets/img/logo/visualhero.jpeg"
import PortfolioSlider from "@components/elements/slider/portfolio-slider/portfolio-slider";
import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";
import styles from "../Animation/Animation.module.css"
import MovieSliderTwo from "@components/elements/slider/movie-slider/movie-slider-two";
import MovieSectionFive from "@components/home-five/movie-section-five";
const VisualProduction = ({ id }) => {
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
      title: "Define the Purpose",
      description: "Clearly articulate the purpose and goals of the visual production. Understand whether it's for marketing, entertainment, education, or another specific objective.",
    },
    {
      id: 2,
      title: "Research and Planning",
      description: "Conduct thorough research on the target audience, competitors, and industry trends. Plan the visual content based on insights gathered during the research phase.",
 
         },
              {
      id: 3,
      title: "Create a Creative Brief ",
      description: "Develop a detailed creative brief description that includes the project's scope, objectives, target audience, key messages, and any specific requirements or constraints.",
    
    },
    {
      id: 4,
      title: " Storyboard and Scripting",
      description: "Visualize the sequence of scenes or elements through storyboarding or scripting. This step helps ensure that the final visual content aligns with the creative brief and project goals.",
    },
    {
      id: 5,
      title: "Pre-Production Tasks",
      description: "Handling logistics, including securing locations, arranging equipment, coordinating talent, and creating a detailed production schedule. This step ensures a smooth production process to onboard.",
    },
    
    {
      id: 6,
      title: "Execute the Production Plan",
      description: "Implement the production plan by shooting or designing the visual elements. Provide clear direction to the team, ensuring that the creative vision is captured effectively.",
    },
    {
      id: 7,
      title: "Post-Production Editing",
      description: "Edit and enhance the raw footage or design elements. Incorporate any necessary revisions based on feedback from multiple takeholders and then fix a final outcome that meets client requirements.",
    },
    {
      id: 8,
      title: "Review and Iterate",
      description: "Collaborate with stakeholders to review the initial draft. Gather feedback and make iterative revisions as much as needed to refine the visual content to form the best outcome from the revisions.",
    },
    {
      id: 9,
      title: "Finalization and Delivery",
      description: "Once all edits and enhancements are complete, finalize the visual content for delivery. This involves exporting videos, preparing images for distribution, or packaging other visual elements.",
    },
    {
      id: 10,
      title: "Feedback and Analysis",
      description: "Collect feedback from the audience or stakeholders after the visual content is released. Use analytics and insights to assess the performance and impact of the visual production in the market.",
    },
  ];

  return (
    <>
      <Header />
      <main>
     
        <Breadcrumb title="Visual Production" subTitle="Visual Production" />
        <section className="case-details-area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="case-details-thumb">
                  <Image
                    data-speed="auto"
                    src={imageOne}
                    style={{ width: "100%", height: "100%" }}
                    alt="image not found"
                  />
                </div>
                <MovieSliderTwo />
        <MovieSectionFive />
                {/* <PortfolioSliderTwo/>
                <MovieSliderTwo/> */}
                <br/><br/>
                {/* <div className="container"> 
    <div className={styles.videoContainer}>
    <video autoPlay loop muted width="100%" height="100%">
      <source src="assets/video/ANANDGIRI FOUNDATION.mp4" type="video/mp4" />
      Video not found or not supported by your browser.
    </video>
  </div>
</div> */}
<br/><br/>
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
                Visual production involves the creation and management of visual content for various purposes, including marketing, entertainment, and communication. Here are four key steps involved in visual production
                </p>
                <p className="mb-45 ">
                  {" "}
                  
Visualization is all about pre-visualizing action, camera angles and camera movement before anything is filmed. The course of planning out complicated sequences in 3D has now become a recognised step in the pipeline of almost all large-scale film making ventures
                </p>
                <p className="mb-45 ">
                  {" "}
                  Techniques used to produce visuals are the features which marketers use to make text interesting and unique. Techniques may include the use of colour or black and white, borders, layout features, cinematographic devices, foregrounding, backgrounding and overlays. 
                </p>
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
                  WHAT WE DO
                </h4>
                <p className="mb-30 ">
                  <strong>Conceptualization</strong><br />
                  Develop a creative brief that outlines the vision, target audience, key messages, and any specific requirements for the visual production.                </p>
                <p className="mb-30 ">
                  <strong>Pre-Production</strong><br />
                  Develop a script or storyboard to plan the sequence of visuals, scenes, and key elements. This step helps visualize the final product and ensures alignment with the creative brief.                </p>
                <p className="mb-30 ">
                  <strong>Production</strong><br />
                  Direct talent, manage the production team, and ensure that the creative vision is translated effectively during the shooting or design process.                </p>
                <p className="mb-30 ">
                  <strong>Post-Production</strong><br />
                  Collaborate with stakeholders to review the initial draft, gather feedback, and make necessary revisions. Iterative feedback loops may be essential to refining the visual content.
                </p>
              </div>
            </div>
          </div>
        </section>
       
        <section className="step-area section-spacing-top">
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
    </section >
    <br/><br/>
    <div className="container"> 
    <div className={styles.videoContainer}>
    <video autoPlay loop muted width="100%" height="100%">
      <source src="assets/video/anandgiri.mp4" type="video/mp4" />
      Video not found or not supported by your browser.
    </video>
  </div>
</div>
<br/><br/>

   
        {/* <FaqSection /> */}
        {/* <CaseQouteArea /> */}
        {/* <PricingSection /> */}
        {/* <GallarySection /> */}
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default VisualProduction;
