import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import IBS from "./IBS";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <IBS/> 
    </Wrapper>
  );
};

export default index;
