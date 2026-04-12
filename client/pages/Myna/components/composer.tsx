import { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import {
  ExpandIcon,
  GhostIcon,
  HistoryIcon,
  ImageIcon,
  NewspaperIcon,
  PaintbrushIcon,
  SparklesIcon,
} from "lucide-react";
import { SessionContext } from "../../../contexts/session";
import { cn } from "../../../lib/utils";

export function Composer() {
  const { isLoggedIn } = useContext(SessionContext);
  const [draft, setDraft] = useState("");
  const [privateChat, setPrivateChat] = useState(false);

  async function startChat() {
    if (!isLoggedIn) return;
    const text = draft.trim();
    if (!text) return;

    const res = await fetch("/api/myna/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json", Credentials: "same-origin" },
      body: JSON.stringify({
        isPublic: !privateChat,
        content: text,
        messageId: crypto.randomUUID(),
      }),
    });
    if (!res.ok) return;

    const { _id } = (await res.json()) as { _id: string };
    window.location.assign(`/myna?conversationId=${encodeURIComponent(String(_id))}`);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <ExpandIcon className="size-4" />
        <div className="flex flex-row items-center gap-2">
          <Button variant="ghost" type="button">
            <HistoryIcon className="size-4" />
            History
          </Button>
          <Button
            variant="ghost"
            type="button"
            onClick={() => setPrivateChat(!privateChat)}
            className={cn(privateChat && "text-primary hover:text-primary")}
          >
            <GhostIcon className="size-4" />
            Private
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <SparklesIcon className="size-8" />
          <h1 className="text-2xl font-bold md:text-4xl">Myna</h1>
        </div>
        <Textarea
          rows={2}
          placeholder="Ask anything"
          className="max-h-24 max-w-full resize-none md:max-w-[80%]"
          disabled={!isLoggedIn}
          value={draft}
          maxLength={4096}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (!isLoggedIn) return;
              startChat();
            }
          }}
        />
        {privateChat ? (
          <p className="text-sm wrap-break-word text-muted-foreground">
            This chat won&apos;t appear for other users and will not be used to train models.
          </p>
        ) : (
          <div className="flex flex-row flex-wrap gap-2">
            <Button variant="outline" type="button">
              <ImageIcon className="size-4" />
              Generate Images
            </Button>
            <Button variant="outline" type="button">
              <PaintbrushIcon className="size-4" />
              Edit Image
            </Button>
            <Button variant="outline" type="button">
              <NewspaperIcon className="size-4" />
              Latest News
            </Button>
          </div>
        )}
      </div>
      {!isLoggedIn && (
        <div className="mx-auto w-full max-w-[80%] shrink-0 border-t border-border">
          <p className="p-3 text-center text-sm text-muted-foreground">
            <a href="/auth/login" className="underline-offset-4 hover:underline">
              Log in
            </a>{" "}
            to start chatting with Myna.
          </p>
        </div>
      )}
    </>
  );
}
