import { useState, useEffect } from "react";
import { Sidebar } from "../../components/sidebar";

type Conversation = {
  id: string;
  message: string;
  createdAt: string;
};

export default function App() {
  const conversationId = new URLSearchParams(window.location.search).get("conversationId");
  const [conversation, setConversation] = useState<Conversation[] | null>(null);

  useEffect(() => {
    if (!conversationId) return;
    // fetch convo from indexeddb?
  }, [conversationId]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden border-border sm:border-x">
          {!conversationId ? (
            <div>no convo id, show empty state</div>
          ) : !conversation ? (
            <div>this mean id was there but no convo was found so invalid</div>
          ) : (
            <div>convo found so show messages</div>
          )}
        </div>
      </div>
    </div>
  );
}
