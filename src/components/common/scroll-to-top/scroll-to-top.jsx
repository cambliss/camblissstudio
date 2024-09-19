import React, { useEffect } from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types"; // Import PropTypes
>>>>>>> master
import BackToTop from "@lib/back-to-top";

function BackToTopCom({ className }) {
  useEffect(() => {
    BackToTop(".scroll-top");
<<<<<<< HEAD
  },[]);
  return (
    <button id="scroll_top" className="scroll-top">
    <i className="fa-solid fa-arrow-up"></i>
=======
  }, []);

  return (
    <button id="scroll_top" className={`scroll-top ${className}`}>
      <i className="fa-solid fa-arrow-up"></i>
>>>>>>> master
    </button>
  );
}

<<<<<<< HEAD
=======
// Add PropTypes validation for className
BackToTopCom.propTypes = {
  className: PropTypes.string, // Validate className as a string (optional)
};

>>>>>>> master
export default BackToTopCom;
