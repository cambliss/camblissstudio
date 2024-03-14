import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import UiUx from "./ui-ux";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <UiUx />
    </Wrapper>
  );
};

export default index;
