// import Link from 'next/link';
// import React from 'react';
// import BgImage from "@assets/img/services/servicesbackground.png";

// const Breadcrumb = ({ title, subTitle }) => {
//   return (
//     <>
//       <div className="adjust-header-space bg-common-black"></div>
//       <div
//         className="fm-breadcrumb-area breadcrumb-style"
//         style={{ backgroundImage: `url(${BgImage.src})` }}
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12">
//               <div className="page-title-wrapper ">
//                 <h1 className="page-title">{title}</h1>
//               </div>
//               <div className="breadcrumb-menu ">
//                 <nav
//                   aria-label="Breadcrumbs"
//                   className="breadcrumb-trail breadcrumbs"
//                 >
//                   <ul className="trail-items">
//                     <li className="trail-item trail-begin ">
//                       <Link href="/">
//                         <span>Home</span>
//                       </Link>
//                     </li>
//                     <li className="trail-item trail-end ">
//                       <span>{subTitle}</span>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// Breadcrumb.js

import Link from 'next/link';
import React from 'react';
import BgImage from "@assets/img/logo/mainbackground.png";

const Breadcrumb = ({ title, servicePage }) => {
  // Define a mapping of service pages to their subtitles
  const serviceSubtitles = {
    "website-design-development": "Website Design & Development",
    "branding-creative-services": "Branding & Creative Services",
    "animation": "Animation",
    "ui-ux": "UI-UX",
    "digital-marketing": "Digital Marketing",
    "visual-production": "Visual Production",
  };

  // Convert the servicePage to lowercase and replace spaces with hyphens
  const formattedServicePage = servicePage ? servicePage.toLowerCase().replace(/\s+/g, '-') : '';

  return (
    <>
      <div className="adjust-header-space bg-common-black"></div>
      <div
        className="fm-breadcrumb-area breadcrumb-style"
        style={{ backgroundImage: `url(${BgImage.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="page-title-wrapper ">
                <h1 className="page-title">{title}</h1>
              </div>
              <div className="breadcrumb-menu ">
                <nav
                  aria-label="Breadcrumbs"
                  className="breadcrumb-trail breadcrumbs"
                >
                  <ul className="trail-items">
                    {/* <li className="trail-item trail-begin ">
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </li> */}
                    <li className="trail-item trail-end ">
                      <span>{serviceSubtitles[ formattedServicePage ]}</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;


