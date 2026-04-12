import { useContext, useEffect, useRef, useState } from "react";
import { SessionContext } from "../../../contexts/session";
import type { ChatMessage, MynaChat, MynaChatAccount } from "../../../types";
import { loadMynaConversation } from "../load-conversation";
import { ChatPanel } from "./chat-panel";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../../components/ui/empty";
import {
  LockIcon,
  MessageCircleXIcon,
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon,
  HistoryIcon,
  SquarePenIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";

type LoadState =
  | { status: "loading" }
  | { status: "private"; account: MynaChatAccount }
  | { status: "missing" }
  | { status: "ready"; canEdit: boolean };

type StreamTarget = { messageId: string; full: string };

export function ConversationView({ conversationId }: { conversationId: string }) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [load, setLoad] = useState<LoadState>({ status: "loading" });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [streamTarget, setStreamTarget] = useState<StreamTarget | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!streamTarget) return;

    const { messageId, full } = streamTarget;
    let i = 0;
    let rafId = 0;

    const applySlice = () => {
      setMessages((prev) => {
        const idx = prev.findIndex((m) => m.id === messageId);
        if (idx === -1) return prev;
        const next = [...prev];
        next[idx] = { ...next[idx], content: full.slice(0, i) };
        return next;
      });
    };

    const bump = () => {
      i = Math.min(full.length, i + 2);
      applySlice();
    };

    bump();
    if (i >= full.length) {
      setStreamTarget(null);
      return;
    }

    let nextAt = performance.now() + 5;

    const loop = (now: number) => {
      if (i >= full.length) {
        setStreamTarget(null);
        return;
      }
      if (now >= nextAt) {
        bump();
        nextAt += 5;
        if (i >= full.length) {
          setStreamTarget(null);
          return;
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [streamTarget]);

  useEffect(() => {
    async function run() {
      setStreamTarget(null);
      setLoad({ status: "loading" });

      const result = await loadMynaConversation(conversationId, isLoggedIn, session);

      if (result.kind === "private") {
        setLoad({ status: "private", account: result.account });
        return;
      }

      if (result.kind === "missing") {
        setLoad({ status: "missing" });
        return;
      }

      setMessages(result.messages);
      setLoad({ status: "ready", canEdit: result.canEdit });
    }

    run();
  }, [conversationId, isLoggedIn, session]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
    return () => cancelAnimationFrame(id);
  }, [messages]);

  async function send() {
    if (load.status !== "ready" || !load.canEdit) return;
    const text = draft.trim();
    if (!text) return;

    const res = await fetch(`/api/myna/chats/${encodeURIComponent(conversationId)}/messages`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: crypto.randomUUID(), content: text }),
    });
    if (!res.ok) return;

    const updated = (await res.json()) as MynaChat;
    const list = updated.messages ?? [];
    const last = list[list.length - 1];

    if (last?.role === "assistant" && last.content.length > 0) {
      setMessages([...list.slice(0, -1), { ...last, content: "" }]);
      setStreamTarget({ messageId: last.id, full: last.content });
    } else {
      setStreamTarget(null);
      setMessages(list);
    }
    setDraft("");
  }

  if (load.status === "loading") {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (load.status === "private") {
    return (
      <>
        <ConversationToolbar />
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <LockIcon />
            </EmptyMedia>
            <EmptyTitle>This chat is private</EmptyTitle>
            <EmptyDescription>
              Ask <span className="font-medium text-foreground">@{load.account.username}</span> to
              make it public if you want to view it.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </>
    );
  }

  if (load.status === "missing") {
    return (
      <>
        <ConversationToolbar />
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <MessageCircleXIcon />
            </EmptyMedia>
            <EmptyTitle>Chat not found</EmptyTitle>
            <EmptyDescription>The chat you are looking for does not exist.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </>
    );
  }

  return (
    <>
      <ConversationToolbar />
      <ChatPanel
        messages={messages}
        draft={draft}
        setDraft={setDraft}
        send={send}
        listRef={listRef}
        readOnly={!load.canEdit}
        isStreaming={streamTarget !== null}
      />
    </>
  );
}

function ConversationToolbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Button variant="ghost" asChild>
        <a href="/myna">
          <ArrowLeftIcon className="size-4" />
        </a>
      </Button>
      <div className="flex flex-row gap-2">
        <Button
          variant="ghost"
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Chat link copied to clipboard");
          }}
        >
          <ShareIcon className="size-4" />
        </Button>
        <Button variant="ghost" type="button">
          <BookmarkIcon className="size-4" />
        </Button>
        <Button variant="ghost" type="button">
          <HistoryIcon className="size-4" />
        </Button>
        <Button variant="ghost" asChild>
          <a href="/myna">
            <SquarePenIcon className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
