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

import imageOne from "@assets/img/logo/adverstisement/adv3.png";  
import imageThree from "@assets/img/logo/adverstisement/adv1.png";  
import imageFour from "@assets/img/logo/adverstisement/adv4.jpg";  
import imageFive from "@assets/img/logo/adverstisement/adv5.jpg";  
// import imageSix from "@assets/img/logo/gallery5.jpeg"; 
import imageSix from "@assets/img/22.jpg";
import imageSeven from "@assets/img/33.jpg";
import imageEight from "@assets/img/54.jpg";
import imageNine from "@assets/img/57.jpg" 

import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Advertisement = ({ id }) => {
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
    // {
    //   id: 9,
    //   img: imageSix,
    // },
    {
      id: 2,
      img: imageFive,
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
      img: imageOne,
    },
    {
      id: 6,
      img: imageSeven,
    },
    {
      id: 7,
      img: imageEight,
    },
    {
      id: 8,
      img: imageNine
    },
  {
    id: 9,
    img: imageSix
  }
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
                <p className="mb-55">
                  Cambliss elevates your brand through strategic and compelling media advertisements. Our primary objective is to seamlessly integrate your brand into the hearts and minds of your target audience. Through innovative storytelling, captivating visuals, and strategic placement, we ensure that your brand not only captures attention but leaves a lasting impression. We understand the power of media in shaping perceptions. Our mission is to leverage this power to amplify your brands message, fostering a connection with your audience. Whether its through impactful video campaigns, engaging social media content, or immersive digital experiences, we tailor our advertising strategies to align with your brands unique identity and objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
      
        <br/><br/>
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
          </section>
        </div>

        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default Advertisement;
