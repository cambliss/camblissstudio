import PropTypes from 'prop-types'; // Import PropTypes for validation
import React from 'react';

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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="page-title-wrapper">
              <h1 className="page-title">{title}</h1>
            </div>
            <div className="breadcrumb-menu">
              <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                <ul className="trail-items">
                  {/* Breadcrumb menu items */}
                  <li className="trail-item trail-end">
                    <span>{serviceSubtitles[formattedServicePage]}</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Add PropTypes validation
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,         // Ensure title is a required string
  servicePage: PropTypes.string.isRequired,   // Ensure servicePage is a required string
};

export default Breadcrumb;
