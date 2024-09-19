import PropTypes from 'prop-types'; // Import prop-types for validation
import GallarySection from "@components/portfolo-details-page/gallary";
import React, { useEffect } from "react";
import useGlobalContext from "@hooks/use-context";
import axios from "axios";
import ServiceMiddle from "./service-middle";

const ServiceDetails = ({ id }) => {
  const { setService } = useGlobalContext();

  // Fetch data
  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.BASE_URL}service/all-service/${id}`)
        .then((res) => {
          setService(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id, setService]);

  return (
    <section className="case-details-area">
      <div className="container">
        <div className="row">
          <ServiceMiddle />
        </div>
      </div>
      <div
        className="container section-spacing-bottom wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-xxl-12">
            <GallarySection />
          </div>
        </div>
      </div>
    </section>
  );
};

// Add prop-types validation for id
ServiceDetails.propTypes = {
  id: PropTypes.string.isRequired, // Make sure id is required and is a string
};

export default ServiceDetails;
