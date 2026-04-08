import sharp from "sharp";
import { SessionContext } from "../../../contexts/session";
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { cn } from "../../../lib/utils";
import { PencilIcon } from "lucide-react";

export function AvatarUpload({
  avatarFile,
  setAvatarFile,
}: {
  avatarFile: File | null;
  setAvatarFile: (file: File) => void;
}) {
  const { session } = useContext(SessionContext);
  if (!session) return null;

  const handleAvatarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="group/avatar relative">
      <Avatar className={cn(session.isOrg ? "rounded-md" : "rounded-full", "size-16 shrink-0")}>
        <AvatarImage
          src={avatarFile ? URL.createObjectURL(avatarFile) : session.avatar}
          className="rounded-none"
        />
        <AvatarFallback className="rounded-none uppercase">
          {session.username.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <button
        type="button"
        className={cn(
          "absolute inset-0 z-10 flex scale-96 items-center justify-center opacity-0 transition-[transform,opacity]",
          "group-hover/avatar:scale-100 group-hover/avatar:cursor-pointer group-hover/avatar:bg-background/80 group-hover/avatar:opacity-80",
          session.isOrg ? "rounded-md" : "rounded-full",
        )}
        onClick={handleAvatarClick}
      >
        <PencilIcon className="size-4 text-foreground" />
      </button>
    </div>
  );
}
