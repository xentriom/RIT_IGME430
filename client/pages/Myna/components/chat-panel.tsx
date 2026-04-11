import type { RefObject } from "react";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import type { ChatMessage } from "../../../types";
import { ArrowLeftIcon, BookmarkIcon, HistoryIcon, ShareIcon, SquarePenIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { toast } from "sonner";

type ChatPanelProps = {
  conversationId: string;
  messages: ChatMessage[];
  draft: string;
  setDraft: (v: string) => void;
  send: () => void;
  listRef: RefObject<HTMLDivElement | null>;
  /** When true, messages are view-only (e.g. public chat as guest). */
  readOnly?: boolean;
  /** Typing indicator on the latest assistant line (optional). */
  isStreaming?: boolean;
};

export function ChatPanel({
  conversationId,
  messages,
  draft,
  setDraft,
  send,
  listRef,
  readOnly = false,
  isStreaming = false,
}: ChatPanelProps) {
  return (
    <>
      <div
        ref={listRef}
        className="mx-auto no-scrollbar min-h-0 w-full max-w-[80%] flex-1 space-y-4 overflow-y-auto px-4 py-4"
      >
        {messages.map((m, i) => {
          const showCaret = m.role === "assistant" && isStreaming && i === messages.length - 1;
          return (
            <div
              key={m.id}
              className={cn(
                "max-w-[min(100%,28rem)] px-3 py-2",
                m.role === "user"
                  ? "ml-auto rounded-lg bg-primary text-primary-foreground"
                  : "mr-auto",
              )}
            >
              <span className="wrap-break-word whitespace-pre-wrap">
                {m.content}
                {showCaret ? <span className="text-muted-foreground">▍</span> : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-full max-w-[80%] shrink-0 border-t border-border">
        {readOnly ? (
          <p className="p-3 text-center text-sm text-muted-foreground">
            <a href="/auth/login" className="underline-offset-4 hover:underline">
              Log in
            </a>{" "}
            as the owner to continue chatting.
          </p>
        ) : (
          <Textarea
            value={draft}
            maxLength={4096}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Ask anything"
            rows={2}
            disabled={isStreaming}
            className="max-h-24 resize-none"
          />
        )}
      </div>
    </>
  );
}
