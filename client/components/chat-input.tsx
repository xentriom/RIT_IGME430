import { useContext, useRef, useState, useTransition } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
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
import type { ReplyOptions } from "../types";
import { ReplyLength, PostReplyOptions } from "../constants";
import { SessionContext } from "../contexts/session";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";

export function ChatInput({
  parentId,
  allowReplyOption = true,
}: {
  parentId?: string;
  allowReplyOption?: boolean;
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
      const res = await fetch(parentId ? `/posts/${parentId}/replies` : "/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body, audience: replyOption, parent: parentId }),
      });

      if (!res.ok) {
        console.error(res);
        toast.error("Failed to chirp");
        return;
      }

      const data = await res.json();
      if (!data) {
        console.error(data);
        toast.error("Failed to chirp");
        return;
      }

      toast.success("Chirped");
      setDraft("");
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
      <Avatar className="hidden sm:block">
        <AvatarImage src="https://placehold.co/40" />
        <AvatarFallback className="uppercase">
          {isLoggedIn ? session.username.charAt(0) : "G"}
        </AvatarFallback>
      </Avatar>
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
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
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
          <div className="my-2 flex flex-col gap-2 rounded-md bg-sidebar-primary/25 p-4 text-sm">
            <p>
              <a href="/auth/login" className="underline">
                Log in
              </a>{" "}
              to start chirping!
            </p>
          </div>
        )}
        {isLoggedIn && session.plan !== "premium+" && draft.length > planLimit && (
          <div className="my-2 flex flex-col gap-2 rounded-md bg-sidebar-primary/25 p-4 text-sm">
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
            <Popover>
              <PopoverTrigger asChild>
                <div className="select-none">
                  <div className="inline-flex flex-row items-center gap-2 rounded-full px-2 py-1 hover:bg-muted">
                    <currentOption.icon className="size-4" />
                    <span className="text-sm">{currentOption.label}</span>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent align="start">
                <RadioGroup
                  value={replyOption}
                  onValueChange={(value) => setReplyOption(value as ReplyOptions)}
                >
                  <div className="flex flex-row items-center gap-2">
                    <RadioGroupItem value="everyone" />
                    <Label>{PostReplyOptions.everyone.label}</Label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <RadioGroupItem value="followers" />
                    <Label>{PostReplyOptions.followers.label}</Label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <RadioGroupItem value="verified" />
                    <Label>{PostReplyOptions.verified.label}</Label>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <RadioGroupItem value="none" />
                    <Label>{PostReplyOptions.none.label}</Label>
                  </div>
                </RadioGroup>
              </PopoverContent>
            </Popover>
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
