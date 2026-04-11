// helper to load and parse convo response from api

import type { MynaChat, MynaChatAccount, Session, ChatMessage } from "../../types";

export type ConversationLoadResult =
  | { kind: "private"; account: MynaChatAccount }
  | { kind: "missing" }
  | { kind: "ready"; messages: ChatMessage[]; canEdit: boolean };

export async function loadMynaConversation(
  conversationId: string,
  isLoggedIn: boolean,
  session: Session | null,
): Promise<ConversationLoadResult> {
  const res = await fetch(`/api/myna/chats/${encodeURIComponent(conversationId)}`, {
    credentials: "same-origin",
  });

  if (res.status === 403) {
    const body = (await res.json()) as { code: string; account: MynaChatAccount };
    if (body.code === "CHAT_PRIVATE") {
      return { kind: "private", account: body.account };
    }
    return { kind: "missing" };
  }

  if (!res.ok) {
    return { kind: "missing" };
  }

  const body = (await res.json()) as MynaChat;
  const messages = body.messages ?? [];

  const canEdit = Boolean(
    isLoggedIn && session && String(body.account._id) === String(session._id),
  );

  return { kind: "ready", messages, canEdit };
}
