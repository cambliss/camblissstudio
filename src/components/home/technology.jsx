// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const PortfolioSection = () => {
//   const [portfolios, setPortfolios] = useState([]);
//     //portfolio data
//     useEffect(() => {
//       axios
//         .get(`${process.env.BASE_URL}portfolio/all-portfolio`)
//         .then((res) => {
//           setPortfolios(res.data);
//         })
//         .catch((err) => console.log(err));
//     }, []);

//   return (
//     <div className="fm-director-films-area bg-common-black section-spacing fm-director-padding">
//       <div className="container">
//         <div
//           className="row section-title-spacing wow fadeInUp"
//           data-delay="0.3s"
//         >
//           <div className="col-12">
//             <div className="fm-director-sec-title text-center ">
//               <span className="section-subtitle title-anim">OUR WORK</span>
//               <div>
//                 <h2 className="section-main-title text-white title-anim featured-work-title">
//                   Featured Work
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container ">
//         <div className="fm-director-wrapper">
//           {portfolios.slice(0, 6).map((item) => (
//             <div
//               className="fm-director-films-single text-center wow fadeInUp"
//               data-wow-delay={item.delay}
//               key={item._id}
//             >
//               <Link href={`/portfolio-details/${item._id}`}>
//                 <div className="fm-director-films-img">
//                   <Image
//                     src={item.image}
//                     width={500}
//                     height={500}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="img not found"
//                   />
//                 </div>
//               </Link>

//               <div className="fm-director-films-content">
//                 <span className="fm-director-films-subtitle">
//                   {item.subTitle}
//                 </span>
//                 <h4 className="fm-director-films-title">
//                   <Link href={`/portfolio-details/${item._id}`}>
//                     {item.title}
//                   </Link>
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioSection;



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import technology from "@assets/img/logo/technology (2).png";

// const Technology= () => {
  
//   return (
   
//     <div className="col-12" style={{backgroundColor:"#000"}}>
//       <div className="custom-director-sec-title text-center">
//         <h2 className="custom-section-main-title text-white title-anim featured-work-title" >
//           Our Technology Stack
//         </h2>
//         <br /><br />
//         <div className="custom-breadcrumb-area breadcrumb-style" style={{ paddingTop: "400px", position: "relative" }}>
//           <Image src={technology} alt="Image Description" style={{ width: "100%", position: "absolute", top: "0px", left: "0px" , height:" 100%"}} />
//         </div>
//       </div>
//     </div>
 
  
//   );
// };

// export default Technology;


  

import React from "react";
import Image from "next/image";

const technologyLogos = [
  "/assets/img/techstack/blackmagic.png",
  "/assets/img/techstack/ps.png",
  "/assets/img/techstack/pr.png",
  "/assets/img/techstack/ai.png",
  "/assets/img/techstack/ae.png",
  "/assets/img/techstack/maya.png",
  "/assets/img/techstack/davinci.png",
  "/assets/img/techstack/tools.png",
  "/assets/img/techstack/take1.png",
  "/assets/img/techstack/redshift.png",
  "/assets/img/technologystack/maya.png",
  "/assets/img/techstack/node.png",
  "/assets/img/techstack/react.png",
  "/assets/img/techstack/html.png",
  "/assets/img/techstack/java.png",
  "/assets/img/techstack/infinity.png",
  "/assets/img/techstack/php.png",
  "/assets/img/techstack/bootstrap.png",
  "/assets/img/techstack/sql.png",
  "/assets/img/techstack/aws.png"
];

const Technology = () => {
  return (
    <div style={{ backgroundColor: "#000", padding: "40px 20px" }}>
      <div className="custom-director-sec-title text-center">
        <h2 className="custom-section-main-title text-white title-anim featured-work-title">
          Our Technology Stack
        </h2>
      </div>
      <div className="logo-container" style={styles.logoContainer}>
        {technologyLogos.map((logo, index) => (
          <div key={index} className="logo-item" style={styles.logoItem}>
            <Image src={logo} alt={`Technology Logo ${index + 1}`} layout="intrinsic" width={100} height={100} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .logo-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .logo-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(10% - 20px);
          min-width: 80px;
          margin: 10px;
        }

        @media (max-width: 768px) {
          .logo-item {
            width: calc(20% - 20px);
          }
        }

        @media (max-width: 480px) {
          .logo-item {
            width: calc(33.33% - 20px);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  logoItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(10% - 20px)",
    minWidth: "80px",
    margin: "10px",
  },
};

export default Technology;
