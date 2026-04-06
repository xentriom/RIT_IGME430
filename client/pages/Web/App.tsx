import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { ChatInput } from "../../components/chat-input";
import { Header } from "./components.tsx/header";
import { PremiumCard } from "./components.tsx/premium-card";
import { Sidebar } from "../../components/sidebar";
import { Post } from "../../components/post";
import { useState, useEffect, useTransition } from "react";
import { FocusedPost } from "../../components/focused-post";
import type { Post as PostType } from "../../types";
import { NewsCard } from "./components.tsx/news-card";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await fetch("/posts");
      const data = await res.json();
      setPosts(data);
    });
  }, [startTransition]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col border-border sm:border-x">
          {/* <Header /> */}
          <ChatInput onPosted={(created) => setPosts((prev) => [created, ...prev])} />
          <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto pb-8">
            {isPending && <div>Loading...</div>}
            {posts.length === 0 && !isPending && <div>No posts found</div>}
            {posts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
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
            <PremiumCard />
            <NewsCard />
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-bold">What&apos;s happening</span>
                </CardTitle>
              </CardHeader>
              <CardContent>Placeholder for what&apos;s happening</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-bold">Who to follow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>Placeholder for who to follow</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-bold">Who to follow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>Placeholder for who to follow</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-bold">Who to follow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>Placeholder for who to follow</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-bold">Who to follow</span>
                </CardTitle>
              </CardHeader>
              <CardContent>Placeholder for who to follow</CardContent>
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
      </div>
    </div>
  );
}
