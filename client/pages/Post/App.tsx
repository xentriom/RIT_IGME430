import { useState, useEffect, useTransition, useContext } from "react";
import {
  BadgeCheck,
  Search,
  ArrowLeft,
  MessageCircle,
  Share2,
  Heart,
  MessageCircleIcon,
} from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { ChatInput } from "../../components/chat-input";
import { Sidebar } from "../../components/sidebar";
import { Post } from "../../components/post";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/ui/empty";
import { SessionContext } from "../../contexts/session";
import type { Post as PostType } from "../../types";

export default function App() {
  const postId = window.location.pathname.split("/").pop();
  const { isLoggedIn } = useContext(SessionContext);
  const [isPostPending, startPostTransition] = useTransition();
  const [isRepliesPending, startRepliesTransition] = useTransition();
  const [post, setPost] = useState<PostType | null>(null);
  const [replies, setReplies] = useState<PostType[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [likeCount, setLikeCount] = useState(0);
  const [likedByMe, setLikedByMe] = useState(false);
  const [isLikePending, startLikeTransition] = useTransition();

  useEffect(() => {
    if (!postId) {
      setLoadError("Invalid post");
      return;
    }

    let cancelled = false;
    setLoadError(null);

    startPostTransition(async () => {
      const res = await fetch(`/posts/${postId}`, {
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      });
      if (cancelled) return;
      if (!res.ok) {
        setPost(null);
        setReplies([]);
        setLoadError(res.status === 404 ? "Post not found" : "Something went wrong");
        return;
      }
      const data = (await res.json()) as PostType;
      setPost(data);
      setLikeCount(data.likeCount ?? 0);
      setLikedByMe(!!data.likedByMe);
      setLoadError(null);

      startRepliesTransition(async () => {
        const repliesRes = await fetch(`/posts/${postId}/replies`, {
          credentials: "same-origin",
          headers: { Accept: "application/json" },
        });
        if (cancelled) return;
        if (!repliesRes.ok) {
          setReplies([]);
          return;
        }
        const repliesData = (await repliesRes.json()) as PostType[];
        setReplies(repliesData);
      });
    });

    return () => {
      cancelled = true;
    };
  }, [postId]);

  useEffect(() => {
    if (!post) return;
    setLikeCount(post.likeCount ?? 0);
    setLikedByMe(!!post.likedByMe);
  }, [post?._id, post?.likeCount, post?.likedByMe]);

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!post || !isLoggedIn) return;

    const prevCount = likeCount;
    const prevLiked = likedByMe;
    setLikedByMe(!prevLiked);
    setLikeCount(prevLiked ? prevCount - 1 : prevCount + 1);

    startLikeTransition(async () => {
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
        const data = (await res.json()) as { likeCount: number; likedByMe: boolean };
        setLikeCount(data.likeCount);
        setLikedByMe(data.likedByMe);
        setPost((p) => (p ? { ...p, likeCount: data.likeCount, likedByMe: data.likedByMe } : p));
      } catch {
        setLikeCount(prevCount);
        setLikedByMe(prevLiked);
      }
    });
  };

  const scrollToReplyComposer = () => {
    document
      .getElementById("reply-composer")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-row border border-border">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col border-x border-border">
          <div
            className="flex cursor-pointer flex-row items-center gap-4 p-4 pb-0 text-lg font-bold"
            onClick={() => history.back()}
          >
            <ArrowLeft className="size-4" />
            Post
          </div>
          {loadError ? (
            <div className="p-4 text-muted-foreground">{loadError}</div>
          ) : isPostPending && !post ? (
            <div className="p-4">Loading...</div>
          ) : post ? (
            <>
              <div className="border-b border-border">
                <div className="flex flex-col gap-3 p-4 pb-4">
                  <div className="flex min-w-0 flex-row items-start gap-3">
                    <Avatar size="lg" className="shrink-0">
                      <AvatarImage src="https://placehold.co/40" />
                      <AvatarFallback className="uppercase">
                        {post.owner.username.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex min-w-0 flex-col gap-0.5 pt-0.5">
                      <div className="flex flex-row flex-wrap items-center gap-x-1.5 gap-y-0">
                        <span className="text-base leading-tight font-bold">
                          {post.owner.displayName}
                        </span>
                        {post.owner.isPremium && (
                          <BadgeCheck className="size-4 shrink-0 text-primary" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">@{post.owner.username}</span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed wrap-anywhere whitespace-pre-wrap">
                    {post.body}
                  </p>
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
                      onClick={scrollToReplyComposer}
                    >
                      <MessageCircle className="size-4" />
                      <span className="tabular-nums">{post.replyCount ?? 0}</span>
                    </button>
                    <button
                      type="button"
                      className={`flex flex-row items-center gap-1 rounded-md py-1 hover:text-rose-400 ${
                        likedByMe ? "text-rose-400" : ""
                      }`}
                      disabled={!isLoggedIn || isLikePending}
                      onClick={toggleLike}
                    >
                      <Heart className={`size-4 ${likedByMe ? "fill-current" : ""}`} />
                      <span className="tabular-nums">{likeCount}</span>
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
                  <ChatInput parentId={post._id} allowReplyOption={false} />
                </div>
              </div>
            </>
          ) : null}
          {!loadError && post ? (
            <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto pb-8">
              {isRepliesPending ? (
                <div className="p-4">Loading...</div>
              ) : (
                <>
                  {replies.length > 0 ? (
                    <>
                      {replies.map((reply) => (
                        <Post key={reply._id} post={reply} />
                      ))}
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center">
                      <Empty>
                        <EmptyHeader>
                          <EmptyMedia variant="icon">
                            <MessageCircleIcon />
                          </EmptyMedia>
                          <EmptyTitle>No replies yet</EmptyTitle>
                          <EmptyDescription>Be the first to reply to this post</EmptyDescription>
                        </EmptyHeader>
                      </Empty>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : null}
        </div>
        {post ? (
          <div className="hidden h-full w-full max-w-xs flex-col gap-4 p-4 sm:flex md:max-w-sm">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="no-scrollbar min-h-0 flex-1 space-y-4 overflow-y-auto">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="text-xl font-bold">Relevant people</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                      <Avatar size="lg" className="shrink-0">
                        <AvatarImage src="https://placehold.co/40" />
                        <AvatarFallback className="uppercase">
                          {post.owner.username.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-1 flex-col">
                        <span className="text-base font-bold">{post.owner.displayName}</span>
                        <span className="text-sm text-muted-foreground">
                          @{post.owner.username}
                        </span>
                        <p className="line-clamp-2 pt-1">
                          {post.owner.bio?.trim() ? post.owner.bio : "No bio yet"}
                        </p>
                      </div>
                      <Button className="shrink-0">Follow</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="text-xl font-bold">What&apos;s happening</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>Placeholder for what&apos;s happening</CardContent>
              </Card>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <a href="/" className="hover:underline">
                  Terms of Service
                </a>
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="/" className="hover:underline">
                  Cookie Policy
                </a>
                <a href="/" className="hover:underline">
                  Accessibility
                </a>
                <a href="/" className="hover:underline">
                  Ads Info
                </a>
                <a href="/" className="hover:underline">
                  More ...
                </a>
                <span>&copy; {new Date().getFullYear()} Chitter</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
