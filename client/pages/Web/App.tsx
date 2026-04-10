import { MessageCircleIcon, Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group";
import { ChatInput } from "../../components/chat-input";
import { PremiumCard } from "./components/premium-card";
import { Sidebar } from "../../components/sidebar";
import { Post } from "../../components/post";
import { useState, useEffect, useTransition } from "react";
import type { Post as PostType } from "../../types";
import { NewsCard } from "./components/news-card";
import { WhoToFollowCard } from "./components/who-to-follow-card";
import { PostSkeleton } from "../../components/post-skeleton";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/ui/empty";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const loadFeed = () => {
      startTransition(async () => {
        const res = await fetch("/posts");
        if (!res.ok) return;
        const data = (await res.json()) as PostType[];
        setPosts(data);
      });
    };

    loadFeed();

    // BFCache
    // https://www.linkedin.com/pulse/why-my-useeffect-didnt-run-what-hell-bfcache-suman-hansada-6vemc#:~:text=Computer%20Scientist%2D2%20(SDE%2D,and%20how%20to%20fix%20it.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) loadFeed();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [startTransition]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col border-border sm:border-x">
          {/* <Header /> */}
          <ChatInput onPosted={(created) => setPosts((prev) => [created, ...prev])} />
          <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto pb-8">
            {isPending ? (
              <>
                {Array.from({ length: 3 }).map((_, index) => (
                  <PostSkeleton key={index} />
                ))}
              </>
            ) : posts.length > 0 ? (
              posts.map((post) => <Post key={post._id} post={post} />)
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <MessageCircleIcon />
                  </EmptyMedia>
                  <EmptyTitle>No Chirps Yet</EmptyTitle>
                  <EmptyDescription>Be the first to chirp</EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
          </div>
        </div>
        <div className="hidden h-full w-full max-w-xs shrink-0 flex-col gap-4 p-4 sm:flex md:max-w-sm">
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="no-scrollbar min-h-0 flex-1 space-y-4 overflow-y-auto">
            <PremiumCard />
            <NewsCard />
            <WhoToFollowCard />
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
