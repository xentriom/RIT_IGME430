import { Avatar as AvatarPrimitive, AvatarImage, AvatarFallback } from "./ui/avatar";
import { cn } from "../lib/utils";

export function ProfileAvatar({
  size = "default",
  isOrg,
  avatar,
  username,
  className,
  ...props
}: {
  size?: "default" | "sm" | "lg";
  isOrg: boolean;
  avatar?: string;
  username: string;
  className?: string;
  props?: React.ComponentProps<typeof AvatarPrimitive>;
}) {
  return (
    <AvatarPrimitive
      size={size}
      className={cn(isOrg ? "rounded-sm" : "rounded-full", className)}
      {...props}
    >
      <AvatarImage src={avatar} className="rounded-none" />
      <AvatarFallback className="rounded-none uppercase">{username.charAt(0)}</AvatarFallback>
    </AvatarPrimitive>
  );
}
