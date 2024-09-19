import Image from "next/image";
import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import SocialIcon from "../social-icon/SocialIcon";

const TeamSectionTwo = ({ teamBottomBorder }) => {
  const [teams] = useState([]);

  return (
    <>
      <div className="fm-director-team-area team-softhalf-bg team__animation section-spacing fix">
        <div className="container">
          <div
            className="row section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-12">
              <div className="section-title text-center">
                <span className="section-subtitle title-anim">
                  WINNING AWARD
                </span>
                <div>
                  <h2 className="section-main-title title-anim">
                    Meet Our Team
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 gy-50">
            {teams.slice(0, 4).map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className="fm-director-team-single team__item">
                  <Image
                    src={item.teamImg}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                  <div className="fm-director-content">
                    <span className="fm-director-designation body-color">
                      {item.designation}
                    </span>
                    <h4 className="fm-director-name title-color">
                      {item.teamName}
                    </h4>
                    <SocialIcon socialWrapperClass="fm-director-social" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {teamBottomBorder && (
        <div className="container">
          <div className="hr1"></div>
        </div>
      )}
    </>
  );
};

// Add PropTypes validation
TeamSectionTwo.propTypes = {
  teamBottomBorder: PropTypes.bool, // teamBottomBorder is expected to be a boolean
};

export default TeamSectionTwo;
