import { LoginForm } from "../../components/login-form";
import { SignupForm } from "../../components/signup-form";
import { ForgotPasswordForm } from "../../components/forgot-password-form";

export default function Auth({ type }: { type: string | null }) {
  const Child = ({ type }: { type: string }) => {
    switch (type) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div className="p-4 min-h-dvh flex items-center justify-center">
      <Child type={type ?? "login"} />
    </div>
  );
}
