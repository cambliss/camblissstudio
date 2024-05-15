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
                     <div className="footer-rules ">
                     <Link href="/policy-privacy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms & Condition</Link>
                        {/* <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms & Condition</Link> */}
                     </div>
<<<<<<< HEAD
                    
                  </div>
               </div><br/>
               <div className="footer-copyright">
                        <p>CIN : U32100TG2018PTC128985</p>
                     </div>
=======
                  </div>
               </div>
>>>>>>> 80bf117be067f3b48bdfc0119f6563b4ef9d096f
            </div>
    </>
  );
};

export default FooterOneCopyright;
