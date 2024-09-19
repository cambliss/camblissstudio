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
import imageOne from "@assets/img/logo/digitalmarketinghero.jpeg"

const DigitaMarketing = ({ id }) => {
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
      title: "Define Your Goals",
      description: "Clearly outline your objectives. Whether its increasing brand awareness, driving website traffic, or boosting sales, having specific goals will guide your digital marketing strategy.",
    },
    {
      id: 2,
      title: "Know Your Target Audience",
      description: "Understand your target audiences demographics, preferences, and online behaviors. Tailor your digital marketing efforts to resonate with your ideal customers.",
    },
    {
      id: 3,
      title: "Digital Marketing Channels",
      description: "Identify the most relevant channels for your business which include social media marketing, SEO, Email Marketing, Content Marketing",
    },
    {
      id: 4,
      title: " Develop a Content Strategy",
      description: "Plan your content to align with your goals and resonate with your audience. Include a mix of blog posts, social media updates, videos, and other content types.",
    },
    {
      id: 5,
      title: "Optimize Your Website",
      description: "Ensure your website is user-friendly and optimized for search engines. This includes improving page speed, using relevant keywords, consistency and having a responsive design.",
    },
    {
      id: 6,
      title: "Implement SEO Strategies",
      description: "Invest in on-page and off-page SEO to improve your websites visibility on search engines. Use relevant keywords, optimize meta tags, and build high-quality backlinks.",
    },
    {
      id: 7,
      title: " Leverage Social Media",
      description: "Create a social media plan that aligns with your brand and engages your audience. Consistently share content, interact with followers, and use paid advertising if applicable.",
    },
    {
      id: 8,
      title: "Email Marketing",
      description: "Build an email list and create targeted email campaigns which has pin point target on customers. Provide value, segment your audience, and use analytics to refine your approach.",
    },
    {
      id: 9,
      title: "Paid Advertising",
      description: "Consider paid advertising on platforms like Google Ads, Facebook Ads, or other relevant networks. Set a budget, target your audience, and analyze results for optimization.",
    },
    {
      id: 10,
      title: "Analytics and Measurement",
      description: "Use analytics tools (e.g., Google Analytics) to track your digital marketing performance. Monitor key metrics, analyze data, and adjust your strategies accordingly.",
    },
    {
      id: 11,
      title: " Conversion Optimization",
      description: "Focus on converting website visitors into customers. Optimize landing pages, calls-to-action, collecting contact information and the concentrating on overall user experience.",
    },
    {
      id: 12,
      title: "Stay Updated and Adapt",
      description: "The digital marketing landscape evolves rapidly. Stay informed about industry trends, algorithm changes, and new technologies. Be ready to adapt your strategy accordingly.",
    },
    {
      id: 13,
      title: "Monitor and Refine",
      description: "Regularly review your digital marketing efforts. Analyze whats working and what needs improvement. Adjust your strategies based on data and feedback.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Breadcrumb/>
        {/* <Breadcrumb title="Digital Marketing" subTitle="Digital Marketing" /> */}
        
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
                  Cambliss specialise in marketing campaigns, content creation and paid adverstising. Cambliss comprehensive digital marketing services encompass a wide range of stategies tailored to your bussiness objectives.
                </p>
                <p className="mb-45 ">
                  {" "}
                  From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we cover all aspects of digital marketing to maximize your brands visibility and reach.
                 </p>
                <p className="mb-45 ">
                  {" "}
                 Our measurable digital marketing staregies are designed to provide tangible results and measurable outcomes for your bussiness. We leverage data-driven insights to optimize campaigns and make informed decisions, ensuring that every marketing effort is purposeful and effective. </p>
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
                  <strong>Social Media Marketing</strong><br />
                  Cambliss elevates your brand presence with Cambliss expert social media marketing. We craft engaging content, drive meaningful interactions, and boost your brands visibility across all major platforms.

Harness the power of social media with Cambliss. Our tailored strategies not only build a strong online community but also drive conversions, turning your followers into loyal customers.                </p>
                <p className="mb-30 ">
                  <strong>Marketing Campaingns</strong><br />
                  Drive organic traffic and enhance your online visibility with Cambliss SEO expertise. We optimize your website, conduct keyword research, and implement strategies that ensure you rank high on search engine results.

Unlock the full potential of your online presence. Cambliss specializes in SEO techniques that propel your business to the top, ensuring your target audience finds you effortlessly.                </p>
                <p className="mb-30 ">
                  <strong>Marketing management</strong><br />
                  Launch impactful marketing campaigns with Cambliss. From concept to execution, our team creates dynamic and targeted campaigns that resonate with your audience and deliver measurable results.

Stand out in the crowded marketplace with Cambliss creative marketing campaigns. We design and implement strategies that not only grab attention but also drive engagement and conversions.                </p>
                <p className="mb-30 ">
                  <strong>SEO</strong><br />
                  Let Cambliss take the lead in managing your marketing efforts. Our experienced team oversees every aspect, providing strategic guidance, monitoring performance, and ensuring your marketing objectives are met.

Partner with Cambliss for comprehensive marketing management. We handle the complexities, allowing you to focus on your core business while we drive and optimize your marketing initiatives.
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
    </section ><br/>
        {/* <StepAreaSection /> */}
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

export default DigitaMarketing;
