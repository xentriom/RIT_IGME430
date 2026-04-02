import { useState, useTransition } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Spinner } from "../../../components/ui/spinner";

export function ForgotPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setError("Resetting password is not supported or implemented");
    });
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Reset Your Password</CardTitle>
        <CardDescription>Enter your username below to reset your password</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="abc123"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Spinner data-icon="inline-start" />}
              Reset Password
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="underline underline-offset-4">
              Login
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
