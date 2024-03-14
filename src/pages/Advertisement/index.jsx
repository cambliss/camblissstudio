import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import Advertisement from "./Advertisement";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <Advertisement/> 
    </Wrapper>
  );
};

export default index;
