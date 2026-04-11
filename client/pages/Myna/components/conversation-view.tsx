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

type ConversationViewProps = {
  conversationId: string;
};

export function ConversationView({ conversationId }: ConversationViewProps) {
  const { isLoggedIn, session } = useContext(SessionContext);
  const [load, setLoad] = useState<LoadState>({ status: "loading" });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function run() {
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

  async function send() {
    if (load.status !== "ready" || !load.canEdit) return;
    const text = draft.trim();
    if (!text) return;

    const post = (msg: { id: string; role: "user" | "assistant"; content: string }) =>
      fetch(`/api/myna/chats/${encodeURIComponent(conversationId)}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Credentials: "same-origin" },
        body: JSON.stringify(msg),
      });

    const userRes = await post({ id: crypto.randomUUID(), role: "user", content: text });
    if (!userRes.ok) return;

    const afterUser = (await userRes.json()) as MynaChat;
    setMessages(afterUser.messages ?? []);
    setDraft("");

    const asstRes = await post({ id: crypto.randomUUID(), role: "assistant", content: text });
    if (asstRes.ok) {
      const afterAsst = (await asstRes.json()) as MynaChat;
      setMessages(afterAsst.messages ?? []);
    }
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
        conversationId={conversationId}
        messages={messages}
        draft={draft}
        setDraft={setDraft}
        send={send}
        listRef={listRef}
        readOnly={!load.canEdit}
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
