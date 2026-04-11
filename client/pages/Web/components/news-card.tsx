import { useState, useEffect, useTransition } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";

export function NewsCard() {
  const [isPending, startTransition] = useTransition();
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await fetch("/api/stories");
      const { data } = await res.json();
      setNews(data.slice(0, 3));
    });
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-xl font-bold">Today&apos;s News</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {isPending ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-0.5">
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {news.map((story) => (
                <a key={story.id} href={story.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <span className="line-clamp-2 font-bold">{story.title}</span>
                  <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
                    <span>{new Date(story.datePublished).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{story.issue.name}</span>
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
