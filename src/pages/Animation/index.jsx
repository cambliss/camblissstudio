import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import Website from "./Animation";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <Website /> {/* Include the Branding component here */}
    </Wrapper>
  );
};

export default index;
