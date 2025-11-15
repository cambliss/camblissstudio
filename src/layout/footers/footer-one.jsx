import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterOneCopyright from "./component/footer-one-copyright";
import Logo from '@assets/img/logo/cambliss.png';
import bgImage from '@assets/img/footer-image-cs.png';
import footerData from "@data/footer-data";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { left } from "@popperjs/core";


const FooterOne = () => {
  return (
    <>
      <PhotoProvider
      speed={() => 800}
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"}
      >
        <footer>
          <div className="footer-area-5 section-spacing-top pos-rel" style={{height:'fit-content',backgroundImage: `url(${bgImage.src})`,height:"fit-content",backgroundSize:'cover'}}>
          <div
  className="footer-bg-3"
  style={{
    position: 'relative',
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Adjust as needed
    width: '100%',
    borderRadius: '8px',
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
      borderRadius: '8px',
    }}
  ></div>
</div>

            <div className="container">
              <div className="footer-middle-area">
                <div className="footer-wrapper footer-widget-about">
                  <div className="footer-logo-2">
                    <Link href="/">
                      <Image
                        src={Logo}
                        style={{ width: "200px", height: "60px", marginTop: "-10px", marginLeft:"-30px" }}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-text" style={{marginTop:'-30px'}}>
                   
                    <p><Link href="/">Home</Link ></p><br/>
                    <p><Link href="/About-us">About us</Link ></p><br/>
                    <p><Link href="/Services">Services</Link ></p><br/>
                   <p> <Link href="/contact">Contact</Link >
                    </p><br /><br />
                    
                  </div>
                </div>
                <div className="footer-wrapper footer-widget-gallery">
                  <div className="footer-title">
                    <h4>Other Links</h4>
                  </div>
                  <p><Link href="/Gallery">Gallery</Link ></p><br/>
                  <p><Link href="/Careers">Careers</Link ></p><br/>
                  <p><Link href="/shop">Shop</Link ></p><br/>
                    
                    {/* <Link href="/Services">Services</Link ><br/>
                    <Link href="/contact">Contact</Link ><br/> */}
                 
                  
                  {/* <ul className="footer-img">
                    {footerData.gallery.galleryData.map((item, i) => (
                      <PhotoView src={item.image.src} key={i}>
                        <li>
                          <span className="popup-image">
                            <Image
                              alt="gallery-image"
                              style={{ width: "100%", height: "auto" }}
                              src={item.image}
                            />
                          </span>
                        </li>
                      </PhotoView>
                    ))}
                  </ul> */}
                </div>
                <div className="footer-wrapper footer-widget-social">
                  <div className="footer-title">
                    <h4>Follow Me</h4>
                  </div>
                  <div className="footer-info">
                    <p>Connect with us on social media</p>
                  </div>
                  <div className="fm-social-2 footer-social-3">
  {footerData.socialLink.socialIcons.map((item) => (
    <Link 
      key={item.id} 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" // Corrected here
    >
      <i className={item.icon}></i>
    </Link>
  ))}
</div>
                </div>
                <div className="footer-wrapper footer-widget-contact">
                  <div className="footer-title">
                    <h4>Contact Us</h4>
                  </div>
                  <ul className="footer-2-link">
                    {footerData.quickLinks.address.slice(0,3).map((item) => (
                      <li key={item.id}>
                        <i className={item.addressWrapperClass}></i>
                        <p>
                          {" "}
                          <Link href={item.contactInfo}>{item.contact}</Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <FooterOneCopyright />
            </div>
          </div>
        </footer>
      </PhotoProvider>
    </>
  );
};

export default FooterOne;
