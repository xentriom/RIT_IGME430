import { useContext, useTransition, type Dispatch, type SetStateAction } from "react";
import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import { ProfileAvatar } from "../../../components/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../../../components/ui/hover-card";
import { ProfilePreview } from "../../../components/profile-preview";
import type { Post as PostType } from "../../../types";
import { ChatInput } from "../../../components/chat-input";
import { SessionContext } from "../../../contexts/session";

export function FocusedPost({
  post,
  setPost,
  setReplies,
}: {
  post: PostType;
  setPost: Dispatch<SetStateAction<PostType | null>>;
  setReplies: Dispatch<SetStateAction<PostType[]>>;
}) {
  const { isLoggedIn } = useContext(SessionContext);
  const [isLikePending, startLikeTransition] = useTransition();

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) return;

    const prev = post;
    const wasLiked = !!prev.likedByMe;
    const n = prev.likeCount ?? 0;
    setPost({
      ...prev,
      likedByMe: !wasLiked,
      likeCount: wasLiked ? n - 1 : n + 1,
    });

    startLikeTransition(async () => {
      try {
        const res = await fetch(`/posts/${String(prev._id)}/like`, {
          method: "POST",
          credentials: "same-origin",
        });
        if (!res.ok) {
          setPost(prev);
          return;
        }
        const data = (await res.json()) as { likeCount: number; likedByMe: boolean };
        setPost((p) => (p ? { ...p, likeCount: data.likeCount, likedByMe: data.likedByMe } : p));
      } catch {
        setPost(prev);
      }
    });
  };

  return (
    <div className="border-b border-border">
      <div className="flex flex-col gap-3 p-4 pb-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href={`/u/${post.owner.username}`}
              className="flex min-w-0 flex-row items-start gap-3"
            >
              <ProfileAvatar
                size="lg"
                isOrg={post.owner.isOrg}
                avatar={post.owner.avatar}
                username={post.owner.username}
                className="shrink-0"
              />
              <div className="flex min-w-0 flex-col gap-0.5 pt-0.5">
                <div className="flex flex-row flex-wrap items-center gap-x-1.5 gap-y-0">
                  <span className="text-base leading-tight font-bold hover:underline">
                    {post.owner.displayName}
                  </span>
                  {post.owner.plan !== "free" && (
                    <BadgeCheck className="size-4 shrink-0 text-primary" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">@{post.owner.username}</span>
              </div>
            </a>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            <ProfilePreview username={post.owner.username} />
          </HoverCardContent>
        </HoverCard>
        <p className="text-base leading-relaxed wrap-anywhere whitespace-pre-wrap">{post.body}</p>
        <p className="text-sm leading-snug text-muted-foreground">
          {new Date(post.createdDate).toLocaleString(undefined, {
            dateStyle: "full",
            timeStyle: "medium",
          })}
        </p>
        <div className="flex flex-row items-center gap-6 border-y border-border py-2 text-muted-foreground">
          <button
            type="button"
            className="flex flex-row items-center gap-1 rounded-md py-1 hover:text-foreground"
          >
            <MessageCircle className="size-4" />
            <span className="tabular-nums">{post.replyCount ?? 0}</span>
          </button>
          <button
            type="button"
            className={`flex flex-row items-center gap-1 rounded-md py-1 hover:text-rose-400 ${
              post.likedByMe ? "text-rose-400" : ""
            }`}
            disabled={!isLoggedIn || isLikePending}
            onClick={toggleLike}
          >
            <Heart className={`size-4 ${post.likedByMe ? "fill-current" : ""}`} />
            <span className="tabular-nums">{post.likeCount ?? 0}</span>
          </button>
          <button
            type="button"
            className="flex flex-row items-center gap-1 rounded-md py-1 hover:text-foreground"
          >
            <Share2 className="size-4" />
          </button>
        </div>
      </div>
      <div id="reply-composer">
        <ChatInput
          parentId={post._id}
          allowReplyOption={false}
          onPosted={(created) => {
            setReplies((prev) => [created, ...prev]);
            setPost((p) => (p ? { ...p, replyCount: (p.replyCount ?? 0) + 1 } : p));
          }}
        />
      </div>
    </div>
  );
}
