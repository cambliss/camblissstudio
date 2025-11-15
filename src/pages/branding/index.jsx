import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import Animation from "../Animation/Animation";
import Branding from "./Branding";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <Branding /> {/* Include the Branding component here */}
    </Wrapper>
  );
};

export default index;
