import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import TeamDetailsPage from "@components/team-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <TeamDetailsPage />
    </Wrapper>
  );
};

export default index;
