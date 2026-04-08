import { useState, useEffect, useTransition, useContext } from "react";
import { Search, ArrowLeft, MessageCircleIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Sidebar } from "../../components/sidebar";
import { Post } from "../../components/post";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/ui/empty";
import { SessionContext } from "../../contexts/session";
import type { Post as PostType } from "../../types";
import { FollowButton } from "../../components/follow-button";
import { PostSkeleton } from "../../components/post-skeleton";
import { FocusedPost } from "./components/focused-post";
import { ProfileAvatar } from "../../components/avatar";

export default function App() {
  const postId = window.location.pathname.split("/").pop();
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPostPending, startPostTransition] = useTransition();
  const [isRepliesPending, startRepliesTransition] = useTransition();
  const [post, setPost] = useState<PostType | null>(null);
  const [replies, setReplies] = useState<PostType[]>([]);
  const [ownerIsFollowing, setOwnerIsFollowing] = useState(false);

  useEffect(() => {
    if (!postId) {
      return;
    }

    startPostTransition(async () => {
      const res = await fetch(`/posts/${postId}`, {
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        setPost(null);
        setReplies([]);
        return;
      }

      const data = (await res.json()) as PostType;
      setPost(data);

      startRepliesTransition(async () => {
        const repliesRes = await fetch(`/posts/${postId}/replies`, {
          credentials: "same-origin",
          headers: { Accept: "application/json" },
        });
        if (!repliesRes.ok) {
          setReplies([]);
          return;
        }
        const repliesData = (await repliesRes.json()) as PostType[];
        setReplies(repliesData);
      });
    });
  }, [postId]);

  useEffect(() => {
    if (!post || !isLoggedIn || !session) return;
    if (session.username === post.owner.username) return;
    let ignore = false;
    fetch(`/api/users/${post.owner.username}`, { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!ignore && data) setOwnerIsFollowing(Boolean(data.isFollowing));
      });
    return () => {
      ignore = true;
    };
  }, [post, isLoggedIn, session]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col border-border sm:border-x">
          <div
            className="flex cursor-pointer flex-row items-center gap-4 p-4 pb-0 text-lg font-bold"
            onClick={() => history.back()}
          >
            <ArrowLeft className="size-4" />
            Post
          </div>
          <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto">
            {post && (
              <>
                <FocusedPost post={post} setPost={setPost} setReplies={setReplies} />
                {isRepliesPending ? (
                  <PostSkeleton />
                ) : (
                  <>
                    {replies.length > 0 ? (
                      <>
                        {replies.map((reply) => (
                          <Post key={reply._id} post={reply} />
                        ))}
                      </>
                    ) : (
                      <div className="flex flex-col items-center py-8">
                        <Empty className="flex-none">
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
              </>
            )}
          </div>
        </div>
        {post && (
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
                      <ProfileAvatar
                        size="lg"
                        isOrg={post.owner.isOrg}
                        avatar={post.owner.avatar}
                        username={post.owner.username}
                        className="shrink-0"
                      />
                      <div className="flex flex-1 flex-col">
                        <span className="text-base font-bold">{post.owner.displayName}</span>
                        <span className="text-sm text-muted-foreground">
                          @{post.owner.username}
                        </span>
                        <p className="line-clamp-2 pt-1">
                          {post.owner.bio?.trim() ? post.owner.bio : "No bio yet"}
                        </p>
                      </div>
                      <FollowButton
                        username={post.owner.username}
                        isFollowing={ownerIsFollowing}
                        onFollowStateChange={(s) => setOwnerIsFollowing(s.isFollowing)}
                        className="shrink-0"
                      />
                    </div>
                  </div>
                </CardContent>
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
        )}
      </div>
    </div>
  );
}
