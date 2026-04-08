import { SessionContext } from "../../../contexts/session";
import { useContext, useEffect, useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const objectUrl = avatarFile ? URL.createObjectURL(avatarFile) : null;

  useEffect(() => {
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [objectUrl]);

  if (!session) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !file.type.startsWith("image/")) return;
    setAvatarFile(file);
  };

  return (
    <div className="group/avatar relative">
      <Avatar className={cn(session.isOrg ? "rounded-md" : "rounded-full", "size-16 shrink-0")}>
        <AvatarImage src={objectUrl ?? `/api/avatar/${session.avatar}`} className="rounded-none" />
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
        onClick={() => inputRef.current?.click()}
      >
        <PencilIcon className="size-4 text-foreground" />
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
      />
    </div>
  );
}
