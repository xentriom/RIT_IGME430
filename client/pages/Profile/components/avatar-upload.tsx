import { SessionContext } from "../../../contexts/session";
import { useContext, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { cn } from "../../../lib/utils";
import { PencilIcon } from "lucide-react";
import { toast } from "sonner";

async function convertFile(file: File): Promise<File> {
  // stolen from myself in another project
  // https://github.com/ProfOyzon/ChangelingVR/blob/main/lib/process-avatar.ts
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const MAX_SIZE = 128;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = MAX_SIZE;
      canvas.height = MAX_SIZE;

      // somehow couldnt load canvas
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas not available"));
        return;
      }

      // get img dimensions
      const nw = img.naturalWidth || img.width;
      const nh = img.naturalHeight || img.height;

      // scale image to MAX_SIZE square
      const scale = Math.max(MAX_SIZE / nw, MAX_SIZE / nh);
      const w = Math.max(1, Math.round(nw * scale));
      const h = Math.max(1, Math.round(nh * scale));
      ctx.drawImage(img, (MAX_SIZE - w) / 2, (MAX_SIZE - h) / 2, w, h);

      // convert to jpeg since canvas is finicky
      // server will do a final conversion
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(img.src);
          if (blob) resolve(new File([blob], "avatar.jpeg", { type: "image/jpeg" }));
          else reject(new Error("Could not encode image"));
        },
        "image/jpeg",
        0.85,
      );
    };

    img.onerror = (e) => {
      URL.revokeObjectURL(img.src);
      reject(e);
    };

    img.src = URL.createObjectURL(file);
  });
}

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

    toast.promise(convertFile(file), {
      loading: "Processing image...",
      success: (file) => {
        setAvatarFile(file);
        return "Image processed successfully";
      },
      error: (error) => (error instanceof Error ? error.message : "Could not process that image"),
    });
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
