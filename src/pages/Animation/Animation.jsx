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
import imageOne from "@assets/img/logo/animationhero.png"
import styles from "./Animation.module.css";
import video1 from '@assets/img/services/videos/video1.mp4';
import video2 from '@assets/img/services/videos/video2.mp4';
<<<<<<< HEAD
import imagehero from "@assets/img/logo/mainbackground.png";

=======
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f


const Animation = ({ id }) => {
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
      title: "Concept and Planning",
      description: "Understand the goal of the animation, Plan the visual sequence, Write a script for guidance.",
    },
    {
      id: 2,
      title: "Design and Pre-production",
      description: "Create characters and assets, Set up the 3D environment, Create a rough animation sequence.",
    },
    {
      id: 3,
      title: "Animation ",
      description: "Set major pose points,Fill in frames for smooth motion,Adjust for realistic movement.",
    
    },
    {
      id: 4,
      title: " Rendering (for 3D)",
      description: "Configure rendering settings, Generate individual frames with natural acceleration.",
    },
    {
      id: 5,
      title: " Post-production",
      description: "Arrange and refine frames,Add music, sound effects, or voiceovers, Adjust colors and tones.",
    },
    
    {
      id: 6,
      title: "Feedback and Iteration",
      description: "Export the final animation,Share through appropriate channels to maintain quality.",
    },
    {
      id: 7,
      title: "Visual Language",
      description: "Collect testimonials and inputs from others.Make adjustments based on feedback.",
    },
    {
      id: 8,
      title: "  Documentation",
      description: "Save all project files, Document processes and settings..",
    },
    
  ];
  const videos = [
    {
      id:1,
<<<<<<< HEAD
      video:'https://www.youtube.com/embed/mO8hYmZSGbs?si=JibmvgU4ovhbI8y2',
    },
    {
      id:2,
      video:'https://www.youtube.com/embed/A9Rae4VeIUQ?si=UvUExaNVJbkJoCVl',
=======
      video:'assets/img/services/videos/video1.mp4',
    },
    {
      id:2,
      video:'assets/img/services/videos/video2.mp4',
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
    },
 ];
 const videos1 = [
  {
    id:1,
<<<<<<< HEAD
    video:'https://www.youtube.com/embed/QYeBqDS0dns?si=cnDdKrKmC5cQD63X',
  },
  {
    id:2,
    video:'https://www.youtube.com/embed/xkp3AulHScY?si=khT2PYyLjBy8ItxO',
=======
    video:'assets/img/services/videos/bluetoothearphone.mp4',
  },
  {
    id:2,
    video:'assets/img/services/videos/M3comingsoon.mp4',
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
  },
];

  return (
    <>
         <Header />
      <div className="adjust-header-space bg-common-black"></div>
<<<<<<< HEAD
      <div className="fm-breadcrumb-area breadcrumb-style" style={{ backgroundImage: `url(${imagehero.src})`, paddingTop: '400px', position: 'relative' }}>
=======
      <div className="fm-breadcrumb-area breadcrumb-style" style={{ backgroundImage: `url(${imageOne.src})`, paddingTop: '400px', position: 'relative' }}>
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="page-title-wrapper" style={{ marginTop: '-300px' }}>
                {/* <h1 className="page-title">Animation</h1> */}
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
<<<<<<< HEAD
                <br/><br/>
                {/* <div className="case-details-thumb" style={{ marginTop: '-100px' }}>
=======
                <div className="case-details-thumb" style={{ marginTop: '-100px' }}>
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
                  <Image
                    data-speed="auto"
                    src={imageOne}
                    style={{ width: "100%", height: "100%" }}
                    alt="image not found"
                  />
<<<<<<< HEAD
                </div> */}
=======
                </div>
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
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
                  We bring your imagination to life through stunning 2D and 3D animations. Our team of talented artists and animators is dedicated to providing high quality animaion services
                   that captivate, enguage, and inspire audiences.Cambliss 3D animation bring ideas and concepts to life in a way that resonates with audiences on an emotional level.
                    Our 3D Animation is a trusted provider of top-quality and expertly crafted animation services.                Our 3D Animation is a leading provider of impactful and visually striking animation services. With their expertise in 3D animation, they create powerful and dynamic visuals that captivate audiences and leave a lastiing impression.


                </p>
                {/* <p className="mb-45 ">
                  {" "}
                  Cambliss 3D animation bring ideas and concepts to life in a way that resonates with audiences on an emotional level. Our 3D Animation is a trusted provider of top-quality and expertly crafted animation services.
                </p>
                <p className="mb-45 ">
                  {" "}
                Our 3D Animation is a leading provider of impactful and visually striking animation services. With their expertise in 3D animation, they create powerful and dynamic visuals that captivate audiences and leave a lastiing impression.
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
                <p className="mb-30">
                  <strong>Character Animation</strong><br />
                  Character animation is a specialized form that focuses on bringing characters to life creating the illusion of movement and emotion in characters                </p>
                <p className="mb-30 ">
                  <strong>Motion Graphics</strong><br />

                  Motion graphics involve the use of animation and visual effects to create dynamic and engaging visual content.                 </p>
                <p className="mb-30 ">
                  <strong>Product Visualization</strong><br />
                  Product visualization is the process of creating realistic or stylized representations of products using visual elements such as images, animations, and interactive experiences.                 </p>
                <p className="mb-30 ">
                  <strong>Explainer Videos</strong><br />
                  Explainer videos are short, engaging videos designed to explain a concept, product, service, or process in a clear and concise manner. 
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
    </section ><br/><br/> */}
    <div className="col-12">
            <div className="section-title text-center">
              <h2 className="section-main-title title-anim step-main-title">
               Our Videos
              </h2>
            </div>
          </div><br/><br/>
    <div className="container"> 
    <div className={styles.videoGrid}>
<<<<<<< HEAD
        {videos.map((videos, index) => (
            <div key={index} className={styles.videoContainer}>
                <iframe
                    width="560"
                    height="315"
                    src={videos.video}
                    title={`Video ${index + 1}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        ))}
    </div>
</div>
<br/><br/>
<div className="container"> 
    <div className={styles.videoContainer}>
    <iframe width="100%" height="800px" src="https://www.youtube.com/embed/dLI09KC_EQ8?si=UZ1w9eOSC5UxeDYJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>

<div className="container"> 
    <div className={styles.videoGrid}>
        {videos1.map((video, index) => (
            <div key={index} className={styles.videoContainer}>
                <iframe
                    width="560"
                    height="315"
                    src={video.video}
                    title={`Video ${index + 1}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        ))}
    </div>
</div>

=======
      {videos.map((video, index) => (
        <div key={index} className={styles.videoContainer}>
          <video controls autoPlay loop muted width="100%" height="100%">
            <source src={video.video} type="video/mp4" />
            Video not found or not supported by your browser.
          </video>
        </div>
      ))}
    </div>
</div>
<br/><br/>
    <div className="container"> 
    <div className={styles.videoContainer}>
    <video autoPlay loop muted width="100%" height="100%">
      <source src="assets/img/services/videos/video3.mp4" type="video/mp4" />
      Video not found or not supported by your browser.
    </video>
  </div>

</div>
<div className="container"> 
    <div className={styles.videoGrid}>
      {videos1.map((video, index) => (
        <div key={index} className={styles.videoContainer}>
          <video controls autoPlay loop muted width="100%" height="100%">
            <source src={video.video} type="video/mp4" />
            Video not found or not supported by your browser.
          </video>
        </div>
      ))}
    </div>
</div>
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
 {/* <div className="container"> 
    <div className={styles.videoContainer}>
    <video autoPlay loop muted width="100%" height="100%">
      <source src="assets/video/fleetins.mp4" type="video/mp4" />
      Video not found or not supported by your browser.
    </video>
  </div>

</div> */}
        {/* <FaqSection /> */}
       
        {/* <PricingSection /> */}
       
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default Animation;
