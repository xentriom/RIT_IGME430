import { useContext, useEffect, useState, useTransition } from "react";
import { SessionContext } from "../../contexts/session";
import type { Account, Post } from "../../types";

export default function App() {
  const username = window.location.pathname.split("/").pop();
  const [isAccountPending, startAccountTransition] = useTransition();
  const [isPostsPending, startPostsTransition] = useTransition();
  const { isLoggedIn, session } = useContext(SessionContext);
  const [account, setAccount] = useState<Account | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    startAccountTransition(async () => {
      const res = await fetch(`/api/users/${username}`);
      const data = await res.json();
      setAccount(data);
      startPostsTransition(async () => {
        const res = await fetch(`/posts?owner=${username}`);
        const data = await res.json();
        setPosts(data);
      });
    });
  }, [username]);

  if (isAccountPending) return <div>Loading...</div>;

  if (!account) return <div>Account not found</div>;

  console.log(account);
  console.log(posts);

  return <div>App rendering for username: {account.username}</div>;
}
