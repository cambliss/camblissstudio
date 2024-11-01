import React from "react";
import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import PrivacyPolicy from "@components/policy-privacy";
import QualityControl from '@components/QualityControl';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <QualityControl />
    </Wrapper>
  );
};

export default index;
