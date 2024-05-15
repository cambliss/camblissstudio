import Image from "next/image";
import React from "react";
import imageOne from "@assets/img/logo/websiteservices.jpg";
import imageTwo from "@assets/img/logo/websiteservices1.jpg";
import imageThree from "@assets/img/logo/websiteservices2.jpg";
<<<<<<< HEAD
import imageFour from "@assets/img/logo/websitedesign6.png";

=======
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const gallery_data = [
  {
    id: 1,
    img: imageOne,
  },
  {
    id: 2,
    img: imageTwo,
  },
  {
<<<<<<< HEAD
    id: 3,
    img: imageFour,
  },
  {
=======
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
    id: 4,
    img: imageThree,
  },
];

const GallarySection = () => {
  const handleImageClick = () => {
    // Handle click event if needed
    console.log("Image clicked");
  };

  return (
    <section className="design-area wow fadeInUp" data-wow-delay="0.3s">
      <h4 className="case-subtitle">
        <span>
          <CaseSubtitleIcon />
        </span>
        Gallery
      </h4>
      <div className="design-humb-grid">
        {gallery_data.map((item) => (
          <div
            key={item.id}
            className="design-thumb img-tilt all__item-fade common-galary-icons"
            onClick={handleImageClick}
          >
            <Image
              src={item.img}
              style={{ width: "100%", height: "auto" }}
              alt="image not found"
            />
<<<<<<< HEAD
         
=======
            {/* <div className="common-galary-icon">
              <i className="fal fa-plus fm-film-video-btn"></i>
            </div> */}
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallarySection;
