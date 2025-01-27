import LoginFormContainer from "@/components/login/LoginFormContainer";

const Login = () => {
  return (
    <section className="h-[100vh] lg:h-screen bg-cover bg-center bg-no-repeat bg-[#f6f7f9] dark:bg-bgDark">
      <div className="h-full flex justify-center items-center">
        <LoginFormContainer />
      </div>
    </section>
  );
};

export default Login;
