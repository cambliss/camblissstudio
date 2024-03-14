import CheckoutMainArea from "@components/checkout";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import React from "react";
import PrivateRoute from "src/PrivateRoute/PrivateRoute";

const index = () => {
  return (
    <Wrapper>
      <PrivateRoute redirect="/checkout">
        <SEO pageTitle="CAMBLISS" />
        <CheckoutMainArea />
      </PrivateRoute>
    </Wrapper>
  );
};

export default index;
