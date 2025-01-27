import Divider from "./Divider";
import LoginForm from "./LoginForm";
import CardWrapper from "./CardWrapper";

function LoginFormContainer() {
  return (
    <CardWrapper
      headerLabel="🔐 Admin Login..."
      backButtonLabel="Dont have an account? "
      backButtonHref=""
      showSocial
    >
      <LoginForm />
      <Divider />
    </CardWrapper>
  );
}
export default LoginFormContainer;
