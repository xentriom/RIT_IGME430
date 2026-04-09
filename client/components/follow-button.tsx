import { useContext, useEffect, useState, useTransition } from "react";

import { SessionContext } from "../contexts/session";
import { Button } from "./ui/button";

export type FollowStateChange = {
  isFollowing: boolean;
  followersCount: number;
};

type FollowButtonProps = {
  username: string;
  isFollowing: boolean;
  onFollowStateChange?: (state: FollowStateChange) => void;
  className?: string;
};

export function FollowButton({
  username,
  isFollowing,
  onFollowStateChange,
  className,
}: FollowButtonProps) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [following, setFollowing] = useState(isFollowing);

  useEffect(() => {
    setFollowing(isFollowing);
  }, [username, isFollowing]);

  const isSelf = Boolean(isLoggedIn && session.username === username);
  if (!isLoggedIn || isSelf) {
    return (
      <Button className={className} disabled={true}>
        Follow
      </Button>
    );
  }

  const toggleFollow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    startTransition(async () => {
      const res = await fetch(`/api/users/${username}/follow`, {
        method: "POST",
        credentials: "same-origin",
      });
      if (!res.ok) return;
      const data = (await res.json()) as FollowStateChange;
      setFollowing(data.isFollowing);
      onFollowStateChange?.(data);
    });
  };

  return (
    <Button type="button" className={className} onClick={toggleFollow} disabled={isPending}>
      {following ? "Unfollow" : "Follow"}
    </Button>
  );
}
