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



import React from "react";
import Image from "next/image";
import Link from "next/link";
import technology from "@assets/img/logo/technology (2).png";

const Technology= () => {
  
  return (
   
    <div className="col-12" style={{backgroundColor:"#000"}}>
      <div className="custom-director-sec-title text-center">
        <h2 className="custom-section-main-title text-white title-anim featured-work-title" >
          Our Technology Stack
        </h2>
        <br /><br />
        <div className="custom-breadcrumb-area breadcrumb-style" style={{ paddingTop: "400px", position: "relative" }}>
          <Image src={technology} alt="Image Description" style={{ width: "100%", position: "absolute", top: "0px", left: "0px" , height:" 100%"}} />
        </div>
      </div>
    </div>
 
  
  );
};

export default Technology;


  

