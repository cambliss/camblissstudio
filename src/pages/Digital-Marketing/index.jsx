import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import DigitaMarketing from "./Digital-Marketing";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <DigitaMarketing /> {/* Include the Branding component here */}
    </Wrapper>
  );
};

export default index;
