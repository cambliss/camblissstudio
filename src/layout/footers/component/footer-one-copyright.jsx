import Link from "next/link";
import React from "react";

const FooterOneCopyright = () => {
  return (
    <>
       <div className="footer-bottom-4">
               <div className="footer-bottom-wrapper-2 ">
              
                  <div className="footer-bottom-inner">
                     
                     <div className="footer-copyright">
                        <p>© 2023<Link href="/"> CAMBLISS </Link> All Rights Reserved.</p>
                     </div>
                     <div className="footer-copyright">
                        <p>Partnered with <a href="https://www.ghb.digital/" target="_blank" rel="noreferrer"><img src="https://www.ghb.digital/img/GHB_logo.png" alt="" /></a></p>
                     </div>
                     <div className="footer-rules ">
                     <Link href="/policy-privacy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms & Condition</Link>
                        <Link href="/refunds-cancellation">Refunds and Cancellations</Link>

                        {/* <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms & Condition</Link> */}
                     </div>
                    
                  </div>
               </div><br/>
               
               <div className="footer-copyright">
                        <p>CIN : U32100TG2018PTC128985</p>
                     </div>
            </div>
    </>
  );
};

export default FooterOneCopyright;
