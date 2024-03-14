import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import PortfolioDetailsPage from "@components/portfolo-details-page";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <PortfolioDetailsPage />
    </Wrapper>
  );
};

export default index;
