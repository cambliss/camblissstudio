
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
import imagehero from "@assets/img/logo/mainbackground.png"

import imageFour from "@assets/img/logo/inventory.jpg";
// import imageTwo from "@assets/img/logo/interiorDesigning/int2.png"; 
import imageTwo from "@assets/img/logo/compliances.webp";



// import imageThree from "@assets/img/logo/Untitled design(4)/branding66.jpeg";  
// import imageFour from "@assets/img/logo/brandingimagenew.jpg";  
// import imageFive from "@assets/img/logo/Untitled design(4)/5.png";  

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
      title: "Define Objectives",
      description: "Clearly outline the goals of your advertisement. Whether it's raising brand awareness, promoting a specific product, or driving sales.",
    },
    {
      id: 2,
      title: "Know Your Audience",
      description: "Understand your target audience's demographics, preferences, and behaviors. Tailor your message and creative elements to resonate with them.",
    },
    {
      id: 3,
      title: "Craft Compelling Content",
      description: " Develop a strong message that communicates your key selling points. Use attention-grabbing headlines, compelling visuals, and persuasive language.",
    },
    {
      id: 4,
      title: "Choose the Right Channels",
      description: "Select the platforms for your target audience. Whether it's social media, TV, radio, print, or online advertising, align your choices with your audience.",
    },
    {
      id: 5,
      title: "Design Engaging Visuals",
      description: " Invest in visually appealing graphics or videos that complement your message. Eye-catching visuals are crucial for grabbing attention in a crowded advertising space.",
    },
    {
      id: 6,
      title: "Include a Call to Action",
      description: " Prompt your audience to take specific actions. Whether it's visiting a website, making a purchase, or subscribing, make a clear CTA guidelines for your audience .",
    },
    {
      id: 7,
      title: "Test and Iterate",
      description: " Before launching a full-scale campaign, conduct A/B testing with different ad variations to identify what resonates best with your audience. Use the data to refine your approach.",
    },
    {
      id: 8,
      title: "Set a Budget",
      description: "Determine your advertising budget based on your objectives and the channels you plan to use. Allocate resources effectively to maximize reach and impact and adjust as needed.",
    },
    {
      id: 9,
      title: "Launch and Monitor",
      description: "Once everything is in place, launch your advertisement campaign. Monitor its performance closely, tracking key metrics such as impressions, click-through rates, and conversions.",
    },
    {
      id: 10,
      title: "Evaluate and Learn",
      description: " After the campaign concludes, conduct a thorough analysis of its overall performance. Identify what worked well and areas for improvement for future advertisement.",
    },

  ];
  const galary_data = [
    {
      id: 1,
      img: imageFour,
    },
    {
      id: 2,
      img: imageTwo,
    },
   
  ];

  return (
    <>
         <Header />
      <div className="adjust-header-space bg-common-black" style={{marginTop:"50px"}}></div>
    
      <main>
        <section className="case-details-area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12" style={{ position: 'relative', zIndex: 2 }}>
                {/* <div className="case-details-thumb" style={{ marginTop: '-100px' }}>
                  <Image
                    data-speed="auto"
                    src={imagehero}
                    style={{ width: "100%", height: "100%" }}
                    alt="image not found"
                  />
                </div> */}<br/><br/>
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

                  Cambliss, a leading interior design company, is dedicated to transforming spaces into aesthetically pleasing and functional environments. With a commitment to innovation and client satisfaction, Cambliss aims to create unique designs that reflect individual lifestyles and organizational identities.                <p className="mb-45 ">
                  Cambliss strives to create exceptional interior designs that not only meet but exceed the expectations of its clients while maintaining a commitment to quality and innovation.    With a team of creative minds and marketing experts, we go beyond traditional advertising boundaries, pushing the limits to deliver campaigns that resonate. By staying ahead of industry trends and leveraging cutting-edge technologies, we ensure that your brand stands out in a crowded media landscape.    
                  </p>
                  {" "}
                  {/* Cambliss strives to create exceptional interior designs that not only meet but exceed the expectations of its clients while maintaining a commitment to quality and innovation.                <p className="mb-45 "> */}
                  </p>
                  {" "}
                  {/* With a team of creative minds and marketing experts, we go beyond traditional advertising boundaries, pushing the limits to deliver campaigns that resonate. By staying ahead of industry trends and leveraging cutting-edge technologies, we ensure that your brand stands out in a crowded media landscape. */}
                {/* </p> */}

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
                  <strong>Client-Centric Approach</strong><br />
                  We begin by thoroughly understanding your brand, target audience, and business objectives. Through market research and analysis, we develop a comprehensive advertising strategy that aligns with your goals and sets the foundation for effective campaigns.              </p>
                <p className="mb-30 ">
                  <strong>Innovative Design Solutions</strong><br />
                  Stay at the forefront of design trends and incorporate innovative concepts into every project.
                  Provide creative and original solutions that elevate the overall design aesthetic.</p>
                <p className="mb-30 ">
                  <strong>Functional and Practical Designs</strong><br />
                  Balance aesthetics with functionality to ensure that each space serves its intended purpose effectively.
                  Optimize space utilization through strategic planning and thoughtful design solutions.</p>
                <p className="mb-30 ">
                  <strong>Attention to Detail</strong><br />
                  Uphold a commitment to precision and attention to detail in every aspect of the design process.
                  Ensure that the smallest details contribute to the overall cohesiveness of the design.                </p> */}
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
        <br /><br />
        <div className="container">
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

export default IBS;
