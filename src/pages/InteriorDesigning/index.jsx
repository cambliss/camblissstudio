import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import InteriorDesigning from "./InteriorDesign";
import Fabrication from "./InteriorDesign";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <Fabrication/> 
    </Wrapper>
  );
};

export default index;
