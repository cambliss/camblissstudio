import SEO from "@components/seo";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import LoginArea from "@components/login-register/login-area";
import Wrapper from "@layout/wrapper";


export default function Login() {
  return (
    <Wrapper>
      <SEO pageTitle='CAMBLISS' />
      <Breadcrumb title="Login" sub="Login" />
      <LoginArea />
    </Wrapper>
  )
}