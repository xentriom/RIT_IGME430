import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";
import { ForgotPasswordForm } from "./components/forgot-password-form";

export default function App() {
  const method = window.location.pathname.split("/").pop();

  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-2 p-4">
      {method === "login" && <LoginForm />}
      {method === "signup" && <SignupForm />}
      {method === "forgot-password" && <ForgotPasswordForm />}
      <span className="text-xs text-muted-foreground">
        Return to{" "}
        <a href="/" className="underline underline-offset-2">
          app
        </a>
      </span>
    </div>
  );
}
