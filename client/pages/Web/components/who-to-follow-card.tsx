import { useContext, useEffect, useState, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Account } from "../../../types";
import { Skeleton } from "../../../components/ui/skeleton";
import { ProfileAvatar } from "../../../components/profile-avatar";
import { FollowButton } from "../../../components/follow-button";
import { SessionContext } from "../../../contexts/session";
import { ProfilePreview } from "../../../components/profile-preview";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../../components/ui/hover-card";
import { ProfileBadge } from "../../../components/profile-badge";

export function WhoToFollowCard() {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await fetch("/api/users");
      const data = (await res.json()) as Account[];

      const filtered = data
        .filter((a) => {
          // Do not filter if not logged in
          if (!isLoggedIn) return true;
          // Remove current user from the list
          return a.username !== session.username;
        })
        .slice(0, 3);

      setAccounts(filtered);
    });
  }, [isLoggedIn, session?.username]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-xl font-bold">Who to follow</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {isPending ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                  <Skeleton className="size-8 shrink-0" />
                  <div className="flex min-w-0 flex-1 flex-row items-center gap-0.5">
                    <div className="flex flex-1 flex-col gap-0.5">
                      <Skeleton className="h-6.5 w-1/2" />
                      <Skeleton className="h-4.5 w-1/3" />
                    </div>
                    <div className="shrink-0 self-start">
                      <Skeleton className="h-8 w-15.5" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {accounts.map((account) => (
                <a
                  key={account.username}
                  href={`/u/${account.username}`}
                  className="flex flex-row items-center gap-2"
                >
                  <ProfileAvatar
                    isOrg={account.isOrg}
                    avatar={`/api/avatar/${account.avatar}`}
                    username={account.username}
                  />
                  <div className="flex min-w-0 flex-1 flex-row items-center gap-2">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="flex min-w-0 flex-row items-center gap-1">
                            <span className="block min-w-0 flex-1 truncate text-base font-bold hover:underline">
                              {account.displayName}
                            </span>
                            <ProfileBadge isOrg={account.isOrg} plan={account.plan} />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <ProfilePreview username={account.username} />
                        </HoverCardContent>
                      </HoverCard>
                      <span className="text-sm text-muted-foreground">@{account.username}</span>
                    </div>
                    <div className="shrink-0 self-start">
                      <FollowButton
                        username={account.username}
                        isFollowing={account.isFollowing}
                        onFollowStateChange={(s) =>
                          setAccounts((prev) =>
                            prev.map((a) => (a.username === account.username ? { ...a, ...s } : a)),
                          )
                        }
                      />
                    </div>
                  </div>
                </a>
              ))}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
