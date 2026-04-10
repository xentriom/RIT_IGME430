import { useContext, useRef, useState, useTransition } from "react";
import { ProfileAvatar } from "./profile-avatar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  ImageIcon,
  ImagePlayIcon,
  SmileIcon,
  CalendarIcon,
  MapPinIcon,
  FlagIcon,
} from "lucide-react";
import { cn } from "../lib/utils";
import type { Post as PostType, ReplyOptions } from "../types";
import { ReplyLength, PostReplyOptions } from "../constants";
import { SessionContext } from "../contexts/session";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ChatInput({
  parentId,
  allowReplyOption = true,
  onPosted,
}: {
  parentId?: string;
  allowReplyOption?: boolean;
  onPosted?: (post: PostType) => void;
}) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [isPending, startTransition] = useTransition();
  const [replyOption, setReplyOption] = useState<ReplyOptions>("everyone");
  const [draft, setDraft] = useState<string>("");
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleChirp = async () => {
    const body = draft.trim();
    if (!isLoggedIn || !body || body.length > planLimit || isPending) return;

    startTransition(async () => {
      toast.promise(
        new Promise((resolve, reject) => {
          fetch(parentId ? `/posts/${parentId}/replies` : "/posts", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Credentials: "same-origin",
            },
            body: JSON.stringify({
              body,
              audience: replyOption,
              parent: parentId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              onPosted?.(data as PostType);
              setDraft("");
              resolve(data);
            })
            .catch((err) => reject(err));
        }),
        {
          loading: "Chirping...",
          success: "Chirped",
          error: (err) => (err instanceof Error ? err.message : "Failed to Chirp"),
        },
      );
    });
  };

  const currentOption = PostReplyOptions[replyOption];

  const planLimit = isLoggedIn ? ReplyLength[session.plan] : ReplyLength["free"];
  const nextPlanTier = isLoggedIn
    ? session.plan === "free" || session.plan === "basic"
      ? "premium"
      : "premium+"
    : null;

  const inLimitText = draft.slice(0, planLimit);
  const exceededText = draft.slice(planLimit);

  return (
    <div className="flex flex-row gap-2 border-b border-border p-4">
      <ProfileAvatar
        size="lg"
        isOrg={isLoggedIn ? session.isOrg : false}
        avatar={isLoggedIn ? `/api/avatar/${session.avatar}` : undefined}
        username={isLoggedIn ? session.username : "G"}
        className="hidden sm:block"
      />
      <div className="flex flex-1 flex-col gap-1">
        <div className="relative">
          {/** This was inspired by https://stackoverflow.com/a/77833688, and simplified a LOT */}
          {draft.length > 0 && (
            <div
              ref={overlayRef}
              aria-hidden="true"
              className={
                "pointer-events-none absolute inset-0 no-scrollbar field-sizing-content overflow-y-auto px-2.5 py-2 text-base wrap-anywhere whitespace-pre-wrap text-foreground md:text-sm"
              }
            >
              <span>{inLimitText}</span>
              {exceededText.length > 0 && (
                <span className="text-destructive-foreground bg-destructive/50">
                  {exceededText}
                </span>
              )}
            </div>
          )}
          <Textarea
            placeholder="What's on your mind?"
            rows={3}
            maxLength={5000}
            className={cn(
              "no-scrollbar max-h-32 w-full resize-none overflow-y-auto text-wrap wrap-anywhere",
              draft.length > 0 && "bg-transparent text-transparent caret-foreground",
            )}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onScroll={(e) => {
              if (overlayRef.current) {
                overlayRef.current.scrollTop = e.currentTarget.scrollTop;
              }
            }}
          />
        </div>
        {!isLoggedIn && draft.length > 0 && (
          <div className="my-2 flex flex-col gap-2 rounded-lg bg-sidebar-primary/25 p-4 text-sm">
            <p>
              <a href="/auth/login" className="underline">
                Log in
              </a>{" "}
              to start chirping!
            </p>
          </div>
        )}
        {isLoggedIn && session.plan !== "premium+" && draft.length > planLimit && (
          <div className="my-2 flex flex-col gap-2 rounded-lg bg-sidebar-primary/25 p-4 text-sm">
            <p>
              Upgrade to <span className="capitalize">{nextPlanTier}</span> to write longer posts
              and Articles.
            </p>
            <a href="/premium" className="font-bold underline">
              Upgrade for 50% off
            </a>
          </div>
        )}
        <div className="flex flex-row items-center justify-between">
          {allowReplyOption && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="select-none">
                  <div className="inline-flex flex-row items-center gap-2 rounded-full px-2 py-1 hover:bg-muted">
                    <currentOption.icon className="size-4" />
                    <span className="text-sm">{currentOption.label}</span>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-fit">
                <DropdownMenuRadioGroup
                  value={replyOption}
                  onValueChange={(value) => setReplyOption(value as ReplyOptions)}
                >
                  {Object.entries(PostReplyOptions).map(([value, option]) => (
                    <DropdownMenuRadioItem key={value} value={value}>
                      <option.icon className="size-4" />
                      {option.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <div className="text-xs text-muted-foreground">
            <span className={cn(draft.length > planLimit && "text-destructive")}>
              {draft.length}
            </span>
            /{planLimit}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div title="Media" className="rounded-full p-2 hover:bg-muted">
              <ImageIcon className="size-4" />
            </div>
            <div title="GIF" className="rounded-full p-2 hover:bg-muted">
              <ImagePlayIcon className="size-4" />
            </div>
            <div title="Emoji" className="rounded-full p-2 hover:bg-muted">
              <SmileIcon className="size-4" />
            </div>
            <div title="Schedule" className="rounded-full p-2 hover:bg-muted">
              <CalendarIcon className="size-4" />
            </div>
            <div title="Location" className="rounded-full p-2 hover:bg-muted">
              <MapPinIcon className="size-4" />
            </div>
            <div title="Content Disclosure" className="rounded-full p-2 hover:bg-muted">
              <FlagIcon className="size-4" />
            </div>
          </div>
          <Button
            disabled={
              !isLoggedIn || draft.trim().length === 0 || draft.length > planLimit || isPending
            }
            onClick={handleChirp}
          >
            {isPending && <Spinner data-icon="inline-start" />}
            Chirp
          </Button>
        </div>
      </div>
    </div>
  );
}
