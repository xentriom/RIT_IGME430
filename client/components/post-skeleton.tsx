import { Skeleton } from "./ui/skeleton";

export function PostSkeleton() {
  return (
    <div className="flex w-full flex-row gap-2 border-b border-border p-4">
      <Skeleton className="size-10 shrink-0 rounded-full" aria-hidden />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex justify-between gap-2">
          <div className="flex min-w-0 flex-row flex-wrap items-center gap-1">
            <Skeleton className="h-4 w-28 max-w-[40%]" aria-hidden />
            <Skeleton className="h-4 w-24 max-w-[35%]" aria-hidden />
            <Skeleton className="size-1 shrink-0 rounded-full" aria-hidden />
            <Skeleton className="h-4 w-10 shrink-0" aria-hidden />
          </div>
          <Skeleton className="size-8 shrink-0 rounded-full" aria-hidden />
        </div>
        <div className="flex flex-col gap-2 pt-0.5">
          <Skeleton className="h-4 w-full" aria-hidden />
          <Skeleton className="h-4 w-[92%]" aria-hidden />
          <Skeleton className="h-4 w-[64%]" aria-hidden />
        </div>
        <div className="flex flex-row items-center gap-6 pt-1">
          <span className="inline-flex items-center gap-1">
            <Skeleton className="size-4 rounded-sm" aria-hidden />
            <Skeleton className="h-4 w-5" aria-hidden />
          </span>
          <span className="inline-flex items-center gap-1">
            <Skeleton className="size-4 rounded-sm" aria-hidden />
            <Skeleton className="h-4 w-5" aria-hidden />
          </span>
          <Skeleton className="size-4 rounded-sm" aria-hidden />
        </div>
      </div>
    </div>
  );
}
