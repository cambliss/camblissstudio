
import Link from 'next/link';
import React from 'react';
import image1 from "@assets/img/logo/plans/3.png";
import image2 from "@assets/img/logo/plans/1.png";
import image3 from "@assets/img/logo/plans/2.png";
import Image from 'next/image';


const PricingSection = () => {
   const imageData = [
      {
        id: 1,
        src: image2,
        alt: 'Image 1 Alt Text',
        link: '/login',
        pricingBtn:'Select Plan',
      },
      {
        id: 2,
        src: image3,
        alt: 'Image 2 Alt Text',
        link: '/login',
        pricingBtn:'Select Plan',
       
      },
      {
        id: 3,
        src: image1,
        alt: 'Image 3 Alt Text',
        link: '/login',
        pricingBtn:'Select Plan',
      },
    ];
   const pricingData=[
      {
          id:1,
          subTitle:'Basic',
          price:<><sup className="fm-pricing-sign">Rs</sup>20k/PM</>,
          services:[
            //   {id:1, service:'Filming Service'},
            //   {id:2, service:'Manicure & Pedicure'},
            //   {id:3, service:'Body Polish'},
            //   {id:4, service:'Pizza Party'},
            //   {id:5, service:'Face Treatment'},
          ],
          pricingBtn:'Select Plan',
      },
      {
          id:2,
          subTitle:'Standard',
          price:<><sup className="fm-pricing-sign">Rs</sup>35k/PM</>,
          services:[
            //   {id:1, service:'Filming Service'},
            //   {id:2, service:'Manicure & Pedicure'},
            //   {id:3, service:'Body Polish'},
            //   {id:4, service:'Pizza Party'},
            //   {id:5, service:'Face Treatment'},
          ],
          pricingBtn:'Select Plan',
      },
      {
          id:3,
          subTitle:'Production',
          price:<><sup className="fm-pricing-sign text-white">Rs</sup>65K/PM</>,
          services:[
            //   {id:1, service:'Filming Service'},
            //   {id:2, service:'Manicure & Pedicure'},
            //   {id:3, service:'Body Polish'},
            //   {id:4, service:'Pizza Party'},
            //   {id:5, service:'Face Treatment'},
          ],
          activeClass:'fm-pricing-box-single active',
          pricingClass:'fm-pricing-amout text-white',
          subTitleClass:"fm-pricing-condition text-white",
          pricingBtn:'Select Plan',
          
      },
      {
          id:4,
          subTitle:'Pro Oscar',
          price:<><sup className="fm-pricing-sign">Rs</sup>99K/PM</>,
          services:[
            //   {id:1, service:'Filming Service'},
            //   {id:2, service:'Manicure & Pedicure'},
            //   {id:3, service:'Body Polish'},
            //   {id:4, service:'Pizza Party'},
            //   {id:5, service:'Face Treatment'},
          ],
          pricingBtn:'Select Plan',
      },
  ]


   return (
      <div className="fm-pricing-area soft-greybg section-spacing">
         <div className="container">
            <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
               <div className="col-xl-12">
                  <div className="section-title text-center">
                     <span className="section-subtitle title-anim">PRICE TABLE</span>
                     <div>
                        <h2 className="section-main-title title-anim" style={{color:"white"}}>Pricing Plans</h2>
                     </div>
                  </div>
               </div>
            </div>

            {/* <div className="animation__pricing wow fadeInUp" data-wow-delay="0.4s">
               <div className="row g-5">
                  {
                     pricingData.slice(0, 4).map((item) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                           <div className={item.activeClass ? item.activeClass : "fm-pricing-box-single"}>
                              <div className="fm-pricing-header mb-25">
                                 <span className={item.subTitleClass ? item.subTitleClass : "fm-pricing-condition"}>{item.subTitle}</span>
                                 <span className={item.pricingClass ? item.pricingClass : "fm-pricing-amout"}>{item.price}</span>
                              </div>
                              <div className="fm-pricing-body">
                                 <ul className="fm-pricing-list mb-40">
                                    {
                                       item.services.map((item) => (
                                          <li key={item.id}>{item.service}</li>
                                       ))
                                    }
                                 </ul>
                              </div>
                              <div className="fm-pricing-footer">
                                 <Link href="/contact" className="fm-pricing-btn">{item.pricingBtn}</Link>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div> */}
          <div className="animation__pricing wow fadeInUp" data-wow-delay="0.4s">
      <div className="row g-5">
        {imageData.map((item) => (
          <div className="col-xl-4 col-lg-4 col-md-4" key={item.id}>
            <div className="fm-pricing-box-single">
              <div className="fm-pricing-header mb-25">
                <Image src={item.src} alt={item.alt} style={{width:"340px" , height:"auto"}}/>
                
              </div>
              <div className="fm-pricing-footer" style={{backgroundColor:"#fff"}}>
                                 <Link href="/contact" className="fm-pricing-btn">{item.pricingBtn}</Link>
                              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
         </div>
      </div>
   );
};

export default PricingSection;