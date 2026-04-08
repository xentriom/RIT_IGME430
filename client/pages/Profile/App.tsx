import { useEffect, useState, useTransition, useContext } from "react";
import type { Account, Post as PostType } from "../../types";
import { Sidebar } from "../../components/sidebar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group";
import { Search, ArrowLeft, Calendar } from "lucide-react";
import { YouMightLike } from "./components/you-might-like";
import { FollowButton } from "../../components/follow-button";
import { Post } from "../../components/post";
import { SessionContext } from "../../contexts/session";
import { EditProfile } from "./components/edit-profile";
import { Button } from "../../components/ui/button";
import { ProfileAvatar } from "../../components/profile-avatar";
import { ProfileBadge } from "../../components/profile-badge";

export default function App() {
  const { isLoggedIn, session } = useContext(SessionContext);
  const username = window.location.pathname.split("/").pop();
  const [isAccountPending, startAccountTransition] = useTransition();
  const [isPostsPending, startPostsTransition] = useTransition();
  const [isFollowersPending, startFollowersTransition] = useTransition();
  const [account, setAccount] = useState<Account | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [followers, setFollowers] = useState<Account[]>([]);

  const loadAccount = () => {
    startAccountTransition(async () => {
      const res = await fetch(`/api/users/${username}`);
      const data = await res.json();
      setAccount(data);

      // Get the account's posts
      startPostsTransition(async () => {
        const res = await fetch(`/api/users/${username}/posts`);
        const data = await res.json();
        setPosts(data);
      });

      // Get the account's followers
      startFollowersTransition(async () => {
        const res = await fetch(`/api/users/${username}/followers`);
        const data = await res.json();
        setFollowers(data);
      });
    });
  };

  const refreshAccount = async () => {
    const res = await fetch(`/api/users/${username}`);
    if (!res.ok) return;
    setAccount(await res.json());
  };

  useEffect(() => {
    loadAccount();

    // BFCache, look at Web/App.tsx for more details
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) loadAccount();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [loadAccount]);

  if (isAccountPending) return <div>Loading...</div>;
  if (!account) return <div>Account not found</div>;

  const isSelf = Boolean(isLoggedIn && session.username === account.username);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col border-border sm:border-x">
          <div
            className="sticky top-0 z-10 flex cursor-pointer flex-row items-center gap-8 bg-background/80 p-4 pb-2 backdrop-blur-sm"
            onClick={() => history.back()}
          >
            <ArrowLeft className="size-6" />
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <span className="text-lg font-bold">{account.displayName}</span>
                <ProfileBadge isOrg={account.isOrg} plan={account.plan} />
              </div>
              <span className="text-sm text-muted-foreground">{posts.length} posts</span>
            </div>
          </div>
          <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto">
            <div className="relative h-full max-h-32 w-full shrink-0 bg-black">
              {/* Cosmic Aurora */}
              {/* https://gradienty.codes/pattern-backgrounds */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
                    radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
                    radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
                    radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
                  `,
                }}
              />
              <div className="absolute bottom-0 left-0 translate-y-1/2 px-4">
                <ProfileAvatar
                  isOrg={account.isOrg}
                  avatar={account.avatar}
                  username={account.username}
                  className="size-22 shrink-0 border-4 border-background"
                />
              </div>
            </div>
            <div className="self-end p-2">
              {isLoggedIn ? (
                isSelf ? (
                  <EditProfile onSaved={refreshAccount} />
                ) : (
                  <FollowButton
                    username={account.username}
                    isFollowing={account.isFollowing}
                    onFollowStateChange={() => {}}
                  />
                )
              ) : (
                // Disabled button bc layout reasons
                <Button disabled>Follow</Button>
              )}
            </div>
            <div className="flex flex-col gap-3 border-b border-border p-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="text-xl font-bold">{account.displayName}</h1>
                  <ProfileBadge isOrg={account.isOrg} plan={account.plan} />
                </div>
                <h2 className="text-sm text-muted-foreground">@{account.username}</h2>
              </div>
              <p className="text-sm">{account.bio || "No bio yet"}</p>
              <div className="flex flex-row items-center gap-2">
                <Calendar className="size-4" />
                <span className="text-sm text-muted-foreground">
                  Joined {new Date(account.createdDate).toLocaleString()}
                </span>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="flex flex-row items-center gap-1">
                  <span className="font-bold">{account.followingCount}</span>
                  Following
                </div>
                <div className="flex flex-row items-center gap-1">
                  <span className="font-bold">{account.followersCount}</span>
                  Followers
                </div>
              </div>
            </div>
            {posts.length > 0 ? (
              <div>
                {posts.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div>No posts yet</div>
            )}
          </div>
        </div>
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
            <YouMightLike followers={followers} />
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
      </div>
    </div>
  );
}
