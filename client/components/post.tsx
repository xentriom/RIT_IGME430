import {
  MoreHorizontal,
  MessageCircle,
  ShareIcon,
  HeartIcon,
  TrashIcon,
  FlagIcon,
  ChartColumnIcon,
  BotIcon,
  MegaphoneIcon,
} from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { ProfilePreview } from "./profile-preview";
import { useContext, useEffect, useState, useTransition } from "react";
import { SessionContext } from "../contexts/session";
import type { Post as PostType } from "../types";
import { ProfileAvatar } from "./profile-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { toast } from "sonner";
import { ProfileBadge } from "./profile-badge";

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
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [likeCount, setLikeCount] = useState(post.likeCount ?? 0);
  const [likedByMe, setLikedByMe] = useState(!!post.likedByMe);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setLikeCount(post.likeCount ?? 0);
    setLikedByMe(!!post.likedByMe);
  }, [post._id, post.likeCount, post.likedByMe]);

  const isOwner = isLoggedIn && post.owner.username === session.username;

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

  const deletePost = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isOwner || isDeleted) return;

    toast.promise(
      fetch(`/posts/${String(post._id)}`, {
        method: "DELETE",
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      }),
      {
        loading: "Deleting post...",
        success: () => {
          setIsDeleted(true);
          return "Post deleted successfully";
        },
        error: (err) => (err instanceof Error ? err.message : "Could not delete the post."),
      },
    );
  };

  if (isDeleted) return null;

  console.log(post);

  return (
    <>
      <HoverCard>
        <a
          href={`/p/${post._id}`}
          className="group/post flex w-full flex-row gap-2 border-b border-border p-4 hover:bg-muted/50"
        >
          <ProfileAvatar
            size="lg"
            isOrg={post.owner.isOrg}
            avatar={`/api/users/${encodeURIComponent(post.owner.username)}/photo`}
            username={post.owner.username}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex justify-between gap-2">
              <div className="flex min-w-0 flex-row items-center gap-1">
                <HoverCardTrigger asChild>
                  <a
                    href={`/u/${post.owner.username}`}
                    className="flex min-w-0 flex-1 cursor-pointer items-center gap-1"
                  >
                    <div className="min-w-0 truncate">
                      <span className="font-bold hover:underline">{post.owner.displayName}</span>{" "}
                      <span className="text-sm text-muted-foreground">@{post.owner.username}</span>
                    </div>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-1">
                    <ProfilePreview username={post.owner.username} />
                  </div>
                </HoverCardContent>
                <span className="shrink-0">
                  <ProfileBadge isOrg={post.owner.isOrg} plan={post.owner.plan} />
                </span>
                <span className="shrink-0 text-sm text-muted-foreground">•</span>
                <span className="shrink-0 text-sm whitespace-nowrap text-muted-foreground">
                  {formatDate(post.createdDate)}
                </span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="rounded-full p-1 hover:bg-muted">
                    <MoreHorizontal className="size-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuItem asChild>
                    <div className="flex flex-row items-center gap-2">
                      <ChartColumnIcon className="size-4" />
                      View Chirp Interactions
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div className="flex flex-row items-center gap-2">
                      <FlagIcon className="size-4" />
                      Report Chirp
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div className="flex flex-row items-center gap-2">
                      <BotIcon className="size-4" />
                      Mark as Spam
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div className="flex flex-row items-center gap-2">
                      <MegaphoneIcon className="size-4" />
                      Request Community Note
                    </div>
                  </DropdownMenuItem>
                  {isOwner && (
                    <DropdownMenuItem asChild>
                      <div className="flex flex-row items-center gap-2" onClick={deletePost}>
                        <TrashIcon className="size-4" />
                        Delete Chirp
                      </div>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
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
                <HeartIcon className={`size-4 ${likedByMe ? "fill-current" : ""}`} />
                <span className="tabular-nums">{likeCount}</span>
              </button>
              <button
                type="button"
                className="cursor-pointer hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigator.clipboard.writeText(`${window.location.origin}/p/${post._id}`);
                  toast.success("Link copied to clipboard");
                }}
              >
                <ShareIcon className="size-4" />
              </button>
            </div>
          </div>
        </a>
      </HoverCard>
    </>
  );
}
