import React, { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import BackToTop from "@lib/back-to-top";

function BackToTopCom({ className }) {
  useEffect(() => {
    BackToTop(".scroll-top");
  }, []);

  return (
    <button id="scroll_top" className={`scroll-top ${className}`}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

// Add PropTypes validation for className
BackToTopCom.propTypes = {
  className: PropTypes.string, // Validate className as a string (optional)
};

export default BackToTopCom;
