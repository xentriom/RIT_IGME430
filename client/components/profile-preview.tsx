import { useContext, useEffect, useState, useTransition } from "react";

import { SessionContext } from "../contexts/session";
import type { Account } from "../types";
import { FollowButton } from "./follow-button";
import { Spinner } from "./ui/spinner";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileBadge } from "./profile-badge";

export function ProfilePreview({ username }: { username: string }) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await fetch(`/api/users/${username}`);
      const data = await res.json();
      setAccount(data);
    });
  }, [username]);

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <Spinner data-icon="inline-start" />
        Loading...
      </div>
    );
  }

  if (!account) return null;

  const isSelf = Boolean(isLoggedIn && session.username === account.username);
  const showFollow = isLoggedIn && !isSelf;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <ProfileAvatar
          isOrg={account.isOrg}
          avatar={account.avatar}
          username={account.username}
          className="size-20 shrink-0"
        />
        {showFollow && (
          <FollowButton
            username={username}
            isFollowing={account.isFollowing}
            onFollowStateChange={(s) => setAccount((prev) => (prev ? { ...prev, ...s } : null))}
          />
        )}
      </div>
      <a
        href={`/u/${account.username}`}
        className="inline-flex cursor-pointer flex-col underline-offset-4 hover:underline"
      >
        <div className="flex flex-row items-center gap-1">
          <span className="text-lg font-bold">{account.displayName}</span>
          <ProfileBadge isOrg={account.isOrg} plan={account.plan} />
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
