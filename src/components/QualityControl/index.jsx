import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import QualityControl from "./QualityControl";
const index = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb />
        {/* <Breadcrumb title="Terms & Conditions" subTitle="Terms & Conditions" /> */}
<QualityControl />
     </main>
      <FooterOne />
    </>
  );
};

export default index;
