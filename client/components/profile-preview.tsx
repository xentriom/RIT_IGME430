import { Button } from "./ui/button";
import { useContext, useEffect, useState, useTransition } from "react";

import { BadgeCheck } from "lucide-react";
import { SessionContext } from "../contexts/session";
import type { Account } from "../types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Spinner } from "./ui/spinner";

export function ProfilePreview({ username }: { username: string }) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [account, setAccount] = useState<Account | null>(null);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    startTransition(async () => {
      const res = await fetch(`/api/users/${username}`);
      const data = await res.json();
      setAccount(data);
      setFollowing(Boolean(data.isFollowing));
    });
  }, [username]);

  if (!account) return null;

  const isSelf = Boolean(isLoggedIn && session.username === account.username);
  const showFollow = isLoggedIn && !isSelf;

  const toggleFollow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    startTransition(async () => {
      const res = await fetch(`/api/users/${username}/follow`, { method: "POST" });
      if (!res.ok) return;
      const data = await res.json();
      setFollowing(data.isFollowing);
      setAccount((prev) =>
        prev
          ? { ...prev, followersCount: data.followersCount, isFollowing: data.isFollowing }
          : null,
      );
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Avatar className="size-20 shrink-0">
          <AvatarImage src="https://placehold.co/40" />
          <AvatarFallback className="uppercase">{account.username.charAt(0)}</AvatarFallback>
        </Avatar>
        {showFollow && (
          <Button onClick={toggleFollow} disabled={isPending}>
            {/** its pretty quick so gonna be commented for now */}
            {/* {isPending && <Spinner data-icon="inline-start" />} */}
            {following ? "Unfollow" : "Follow"}
          </Button>
        )}
      </div>
      <a
        href={`/u/${account.username}`}
        className="inline-flex cursor-pointer flex-col underline-offset-4 hover:underline"
      >
        <div className="flex flex-row items-center gap-1">
          <span className="text-lg font-bold">{account.displayName}</span>
          {account.plan !== "free" && <BadgeCheck className="size-4 text-primary" />}
        </div>
        <span className="text-sm text-muted-foreground">@{account.username}</span>
      </a>
      <p className="line-clamp-3">{account.bio || "No bio yet"}</p>
      <div className="flex flex-row gap-2">
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
  );
}
