// import ServiceScroll from "@components/elements/slider/scroll-area-slider/service-scroll";
// import useGlobalContext from "@hooks/use-context";
// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const ServiceTwo = () => {
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}service/all-service`)
//       .then((res) => {
//         setServices(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <section className="fm-services-area fm-services-spc bg-common-black section-spacing">
//       <div className="container pt-20">
//         <div className="row g-5 gy-50">
//           <div
//             className="col-xl-4 col-lg-12 wow fadeInUp"
//             data-wow-delay="0.3s"
//           >
//             <div className="services-sec-wrapper">
//               <div className="section-title section-title-spacing">
//                 <span className="section-subtitle title-anim">WHAT WE DO</span>
//                 <h2 className="section-main-title text-white title-anim">
//                   Best Offering Services
//                 </h2>
//               </div>

//               <div className="fm-services-btn btn_wrapper">
//                 <Link
//                   href="/service-details"
//                   className="blog-rotate-btn is-white btn-item btn__item-move"
//                 >
//                   <span>
//                     <i className="flaticon-right-arrow-1"></i>
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-xl-8 col-lg-12">
//             <div className="fm-services-content-2 fade_bottom">
//               {services.slice(4, 8).map((item) => (
//                 <div
//                   className="fm-single-services-content mb-20 wow fadeInUp"
//                   data-wow-delay={item.delay}
//                   key={item._id}
//                 >
//                   <span className="services-num">{item.serviceNum}</span>
//                   <h4 className="fm-service-title">
//                     <Link
//                       className="fm-content-title"
//                       href={`/service-details/${item._id}`}
//                     >
//                       {item.title}
//                     </Link>
//                   </h4>
//                   <p className="fm-services-text-2">{item.description}</p>
//                   <div className="fm-btn services-btn-2">
//                     <Link
//                       href={`/service-details/${item._id}`}
//                       className="border-btn is-white"
//                     >
//                       {item.serviceBtn}
//                       <span>
//                         <i className="fa-regular fa-arrow-right"></i>
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <ServiceScroll />
//     </section>
//   );
// };

// export default ServiceTwo;


import Link from "next/link";
import ServiceScroll from "@components/elements/slider/scroll-area-slider/service-scroll";
import React from "react";
import useGlobalContext from "@hooks/use-context";

const manuallyWrittenServices = [
  {
    link: "/service-details/1",
    serviceNum: "01",
    title: "Website Design & Development",
    description: "Our website design & development services are tailored to meet the unique needs of your business",
    serviceBtn: "View More",
    delay: "0.3s",
  },
  {
    link: "/branding",
    serviceNum: "02",
    title: "Branding & Creative Services",
    description: "Our approach to branding is collaborative involving clients in every step to capture your vision.",
    serviceBtn: "View More",
    delay: "0.4s",
  },
  {
    link: "/Animation",
    serviceNum: "03",
    title: "Animation",
    description: "We bring your imagination to life through stunning 2D & 3D animations and captivate the audience.",
    serviceBtn: "View More",
    delay: "0.5s",
  },
  {
    link: "/UI-UX",
    serviceNum: "04",
    title: "UI/UX",
    description: "Cambliss specializes in UI/UX, where your functionality meets aesthetics.",
    serviceBtn: "View More",
    delay: "0.6s",
  },
  {
    // link: "/Digital-Marketing",
    link:"",
    serviceNum: "05",
    title: "Digital Marketing",
    description: "From SEO to PPC advertising to social media marketing, Cambliss covers all aspects of marketing.",
    serviceBtn: "View More",
    delay: "0.6s",
  },
  {
    link: "/Advertisement",
    serviceNum: "06",
    title: "Advertisement",
    description: "Elevate Your Experience, Embrace the Extraordinary.",
    serviceBtn: "View More",
    delay: "0.6s",
  },

  {
    link: "/InteriorDesigning",
    serviceNum: "07",
    title: "Interior Designing",
    description: "Where Style Meets Comfort, Your Space Unveiled.",
    serviceBtn: "View More",
    delay: "0.6s",
  },
  {
    link: "/Visual-Production",
    serviceNum: "08",
    title: "Visual Production",
    description: "Where Style Meets Comfort, Your Space Unveiled.",
    serviceBtn: "View More",
    delay: "0.6s",
  },
  {
    link: "/IBS",
    serviceNum: "09",
    title: "Integrated Cloud Bussiness Solutions",
    description: "Cambliss IBS offers comprehensive software suites to address key business challenges.",
    serviceBtn: "View More",
    delay: "0.6s",
  },
];

const ServiceTwo = () => {
  return (
    <section className="fm-services-area fm-services-spc bg-common-black section-spacing">
      <div className="container pt-20">
        <div className="row g-5 gy-50">
          <div className="col-xl-4 col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="services-sec-wrapper">
              <div className="section-title section-title-spacing">
                <span className="section-subtitle title-anim">WHAT WE DO</span>
                <h2 className="section-main-title text-white title-anim">
                  Our Services
                </h2>
              </div>

              <div className="fm-services-btn btn_wrapper">
                <Link
                  href="/contact"
                  className="blog-rotate-btn is-white btn-item btn__item-move"
                >
                  <span>
                    <i className="flaticon-right-arrow-1"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-12">
            <div className="fm-services-content-2 fade_bottom">
              {manuallyWrittenServices.map((item) => (
                <div
                  className="fm-single-services-content mb-20 wow fadeInUp"
                  data-wow-delay={item.delay}
                  key={item.serviceNum}
                >
                  <span className="services-num">{item.serviceNum}</span>
                  <h4 className="fm-service-title">
                    <Link
                      className="fm-content-title"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </h4>
                  <p className="fm-services-text-2">{item.description}</p>
                  <div className="fm-btn services-btn-2">
                    <Link
                      href={item.link}
                      className="border-btn is-white"
                    >
                      {item.serviceBtn}
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Additional components or sections */}
      <ServiceScroll />
    </section>
  );
};

export default ServiceTwo;
