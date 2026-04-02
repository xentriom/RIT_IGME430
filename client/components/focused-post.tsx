import { BadgeCheck } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export function FocusedPost({ post }: { post: any }) {
  return (
    <div className="flex flex-row gap-2">
      <Avatar className="size-10">
        <AvatarImage src="https://placehold.co/40" />
        <AvatarFallback className="uppercase">{post.owner.username.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-1">
          <span className="text-lg font-bold">{post.owner.displayName}</span>
          {post.owner.plan !== "free" && <BadgeCheck className="size-4 text-primary" />}
        </div>
        <span className="text-sm text-muted-foreground">@{post.owner.username}</span>
      </div>
    </div>
  );
}
