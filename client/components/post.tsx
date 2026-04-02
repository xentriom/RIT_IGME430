import { MoreHorizontal, MessageCircle, Share2, Heart, BadgeCheck } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { ProfilePreview } from "./profile-preview";
import { useContext, useEffect, useState, useTransition } from "react";
import { SessionContext } from "../contexts/session";
import type { Post as PostType } from "../types";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

function formatDate(date: string) {
  const now = new Date();
  const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
  return new Date(date).toLocaleDateString();
}

export function Post({ post }: { post: PostType }) {
  const { isLoggedIn } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [likeCount, setLikeCount] = useState(post.likeCount ?? 0);
  const [likedByMe, setLikedByMe] = useState(!!post.likedByMe);

  useEffect(() => {
    setLikeCount(post.likeCount ?? 0);
    setLikedByMe(!!post.likedByMe);
  }, [post._id, post.likeCount, post.likedByMe]);

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) return;

    const prevCount = likeCount;
    const prevLiked = likedByMe;
    setLikedByMe(!prevLiked);
    setLikeCount(prevLiked ? prevCount - 1 : prevCount + 1);

    startTransition(async () => {
      try {
        const res = await fetch(`/posts/${String(post._id)}/like`, {
          method: "POST",
          credentials: "same-origin",
          headers: { Accept: "application/json" },
        });
        if (!res.ok) {
          setLikeCount(prevCount);
          setLikedByMe(prevLiked);
          return;
        }
        const data = await res.json();
        setLikeCount(data.likeCount);
        setLikedByMe(data.likedByMe);
      } catch {
        setLikeCount(prevCount);
        setLikedByMe(prevLiked);
      }
    });
  };

  return (
    <>
      <HoverCard>
        <a
          href={`/p/${post._id}`}
          className="group/post flex w-full flex-row gap-2 border-b border-border p-4 hover:bg-muted/50"
        >
          <Avatar size="lg">
            <AvatarImage src="https://placehold.co/40" />
            <AvatarFallback className="uppercase">{post.owner.username.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex justify-between">
              <div className="flex flex-row items-center gap-1">
                <HoverCardTrigger asChild>
                  <a
                    href={`/u/${post.owner.username}`}
                    className="inline-flex cursor-pointer items-center gap-1"
                  >
                    <span className="font-bold hover:underline">{post.owner.displayName}</span>
                    <span className="text-sm text-muted-foreground">@{post.owner.username}</span>
                    {post.owner.isPremium && <BadgeCheck className="size-4 text-primary" />}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-1">
                    <ProfilePreview username={post.owner.username} />
                  </div>
                </HoverCardContent>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(post.createdDate)}
                </span>
              </div>
              <div className="rounded-full p-1 hover:bg-mauve-500">
                <MoreHorizontal className="size-4" />
              </div>
            </div>
            <div className="w-full wrap-anywhere whitespace-pre-wrap">{post.body}</div>
            <div className="flex flex-row items-center gap-6">
              <button
                type="button"
                className="flex cursor-pointer flex-row items-center gap-1 hover:text-foreground/80"
                onClick={() => {}}
              >
                <MessageCircle className="size-4" />
                <span className="tabular-nums">{post.replyCount}</span>
              </button>
              <button
                type="button"
                className={`flex cursor-pointer flex-row items-center gap-1 hover:text-rose-400 ${
                  likedByMe ? "text-rose-400" : ""
                }`}
                disabled={!isLoggedIn || isPending}
                onClick={toggleLike}
              >
                <Heart className={`size-4 ${likedByMe ? "fill-current" : ""}`} />
                <span className="tabular-nums">{likeCount}</span>
              </button>
              <Share2 className="size-4" />
            </div>
          </div>
        </a>
      </HoverCard>
    </>
  );
}
