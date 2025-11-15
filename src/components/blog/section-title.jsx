import React from 'react';
import Image from 'next/image'; // Add this import for Next.js
import hiring from '@assets/img/hiring.png'; // Make sure this path is correct

const SectionTitle = () => {
  return (
    <>
      <div className="fm-about-area bg-common-black section-spacing fix" style={{paddingTop: '0px'}}>
        <div className="container-fluid">
          <div className="row align-items-center g-5 gy-50">
            
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <div className="fm-about-content-section">
                <span className="section-subtitle title-anim">WE ARE HIRING</span>
                <h2 className="section-main-title text-white mb-25 title-anim">
                Join Our Team and Shapem the Future of Digital Innovation!
                </h2>
                <p className="mb-20">
                We're looking for talented individuals who are passionate about innovation and growth. Apply today and be part of something extraordinary.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
              <div className="fm-director-about-img">
                <Image
                  src={hiring}
                  alt="Hiring"
                  width={700} // Adjust image width
                  height={300} // Adjust image height
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SectionTitle;
