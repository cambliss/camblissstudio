import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import VisualProduction from "./Visual-Production";  
import MovieSliderTwo from "@components/elements/slider/movie-slider/movie-slider-two";
import MovieSectionFive from "@components/home-five/movie-section-five";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
     
      <VisualProduction /> {/* Include the Branding component here */}
    </Wrapper>
  );
};

export default index;
