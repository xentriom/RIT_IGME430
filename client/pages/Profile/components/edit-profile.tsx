import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
} from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { useContext, useState, useTransition, useEffect } from "react";
import { SessionContext } from "../../../contexts/session";
import { toast } from "sonner";
import { Spinner } from "../../../components/ui/spinner";
import { Checkbox } from "../../../components/ui/checkbox";
import { AvatarUpload } from "./avatar-upload";

type EditProfileProps = {
  onSaved?: () => void;
};

export function EditProfile({ onSaved }: EditProfileProps) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState(session?.displayName || "");
  const [bio, setBio] = useState(session?.bio || "");
  const [isPublic, setIsPublic] = useState(session?.isPublic ?? true);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetch(`/api/users/${encodeURIComponent(session.username)}/photo`, {
        credentials: "same-origin",
      })
        .then((res) => res.blob())
        .then((blob) => {
          setAvatarFile(
            new File([blob], `${session.username}-avatar.webp`, { type: "image/webp" }),
          );
        });
    }
  }, [isLoggedIn, session]);

  if (!session) return null;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isPending) return;

    startTransition(async () => {
      toast.promise(
        new Promise((resolve, reject) => {
          const form = new FormData();
          form.set("displayName", displayName);
          form.set("bio", bio);
          form.set("isPublic", String(isPublic));
          if (avatarFile) form.set("avatar", avatarFile);

          fetch("/api/users/me", { method: "PATCH", credentials: "same-origin", body: form })
            .then((res) => {
              if (!res.ok) reject(res.statusText);
              return res.json();
            })
            .then((data) => {
              onSaved?.();
              setOpen(false);
              resolve(data);
            })
            .catch((err) => {
              console.error(err);
              reject(err);
            });
        }),
        {
          loading: "Saving...",
          success: "Profile updated",
          error: (err) => (err instanceof Error ? err.message : "Failed to update profile"),
        },
      );
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Edit Profile</DialogTitle>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <div className="flex w-full">
              <AvatarUpload avatarFile={avatarFile} setAvatarFile={setAvatarFile} />
            </div>
          </Field>
          <Field>
            <FieldLabel>Display Name</FieldLabel>
            <Input
              type="text"
              value={displayName}
              maxLength={50}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel>Bio</FieldLabel>
            <Textarea
              value={bio}
              rows={3}
              maxLength={160}
              className="resize-none"
              onChange={(e) => setBio(e.target.value)}
            />
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              checked={!isPublic}
              onCheckedChange={(checked) => setIsPublic(checked !== true)}
            />
            <FieldContent>
              <FieldLabel>Protect your posts</FieldLabel>
              <FieldDescription>
                When selected, your posts and other account information are only visible to people
                who follow you. <a href="#">Learn more</a>
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit} disabled={isPending}>
            {isPending && <Spinner data-icon="inline-start" />}
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
