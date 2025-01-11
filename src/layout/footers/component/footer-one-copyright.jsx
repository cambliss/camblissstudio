import Link from "next/link";
import React from "react";

const FooterOneCopyright = () => {
  return (
    <div className="footer-bottom-4">
      <div className="footer-bottom-wrapper-2">
        <div className="footer-bottom-inner">
          {/* Copyright Text */}
          <div className="footer-copyright">
            <p>
              © 2025
              <Link href="/"> CAMBLISS </Link> All Rights Reserved.
            </p>
            <div>
                    <p>CIN : 	U32100TG2018PTC128985</p>

                    </div>
          </div>
          
          {/* Partner Logo */}
          <div className="footer-copyright">
            <p>
              Partnered with{" "}
              <a
                href="https://www.ghb.digital/"
                target="_blank"
                rel="noopener noreferrer" // added noopener noreferrer for security
              >
                <img
                  src="https://www.ghb.digital/img/GHB_logo.png"
                  alt="GHB Logo"
                />
              </a>
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-rules">
            <Link href="/policy-privacy">Privacy Policy</Link>
            <Link href="/quality-control">Quality Control</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/refunds-cancellation">Refunds and Cancellations</Link>
          </div>
          
        
        </div>
      </div>
    </div>
  );
};

export default FooterOneCopyright;
