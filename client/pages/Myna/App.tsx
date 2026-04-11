import { Sidebar } from "../../components/sidebar";
import { Composer } from "./components/composer";
import { ConversationView } from "./components/conversation-view";

export default function App() {
  const conversationId = new URLSearchParams(window.location.search).get("conversationId");

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x">
        <Sidebar />
        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden border-border p-4 sm:border-x">
          {!conversationId ? <Composer /> : <ConversationView conversationId={conversationId} />}
        </div>
      </div>
    </div>
  );
}
