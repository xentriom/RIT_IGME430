import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useTransition } from "react";
import { toast } from "sonner";
import { Spinner } from "../../../components/ui/spinner";

export function PasswordReset({ onBack }: { onBack: () => void }) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const formData = new FormData(e.target as HTMLFormElement);
      const currentPassword = formData.get("currentPassword") as string;
      const newPassword = formData.get("newPassword") as string;
      const confirmPassword = formData.get("confirmPassword") as string;

      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      toast.promise(
        new Promise((resolve, reject) => {
          fetch("/api/account/reset-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Credentials: "same-origin",
            },
            body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.error) reject(data.error);
              resolve(data);
            })
            .catch((err) => reject(err));
        }),
        {
          loading: "Resetting password...",
          success: "Password reset successfully",
          error: (err) => {
            if (err instanceof Error) return err.message;
            if (typeof err === "string") return err;
            return "Failed to reset password";
          },
        },
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-b border-border">
        <div className="flex items-center gap-2 p-2">
          <Button type="button" variant="ghost" onClick={onBack}>
            <ChevronLeftIcon />
          </Button>
          <h2 className="text-xl font-bold">Change your password</h2>
        </div>
        <div className="flex flex-col p-4">
          <Input type="password" name="currentPassword" placeholder="Current password" required />
          <a href="#" className="text-sm link">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b border-border p-4">
        <Input type="password" name="newPassword" placeholder="New password" required />
        <Input type="password" name="confirmPassword" placeholder="Confirm password" required />
      </div>
      <p className="border-b border-border p-4 text-sm text-muted-foreground">
        Changing your password will log you out of all your active Chitter sessions except the one
        you’re using at this time.{" "}
        <a href="#" className="link">
          Learn more
        </a>
      </p>
      <div className="w-full p-4">
        <Button type="submit" className="" disabled={isPending}>
          {isPending && <Spinner data-icon="inline-start" />}
          Save
        </Button>
      </div>
    </form>
  );
}
