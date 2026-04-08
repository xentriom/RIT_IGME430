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
      className={cn(isOrg ? "rounded-md" : "rounded-full", className)}
      {...props}
    >
      <AvatarImage src={avatar} className={isOrg ? "rounded-md" : "rounded-full"} />
      <AvatarFallback className={`uppercase ${isOrg ? "rounded-md" : "rounded-full"}`}>
        {username.charAt(0)}
      </AvatarFallback>
    </AvatarPrimitive>
  );
}
