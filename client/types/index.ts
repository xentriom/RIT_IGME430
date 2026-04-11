export type ReplyOptions = "everyone" | "followers" | "verified" | "none";
export type PaymentCycle = "annual" | "monthly";
export type SubscriptionPlan = "free" | "basic" | "premium" | "premium+";
export type Session = {
  _id: string;
  username: string;
  displayName: string;
  isPublic: boolean;
  bio: string;
  plan: SubscriptionPlan;
  isOrg: boolean;
  avatar: string;
  createdDate: string;
  [key: string]: unknown;
};
export type Account = {
  username: string;
  displayName: string;
  isPublic: boolean;
  bio: string;
  plan: SubscriptionPlan;
  isOrg: boolean;
  avatar: string;
  createdDate: string;
  isFollowing: boolean;
  followingCount: number;
  followersCount: number;
};
export type Post = {
  _id: string;
  owner: {
    username: string;
    displayName: string;
    avatar: string;
    plan: SubscriptionPlan;
    bio: string;
    isOrg: boolean;
  };
  body: string;
  parent: string | null;
  audience: ReplyOptions;
  createdDate: string;
  likeCount: number;
  replyCount: number;
  likedByMe: boolean;
};
export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdDate: string;
};
export type MynaChatAccount = {
  _id: string;
  username: string;
};
export type MynaChat = {
  _id: string;
  account: MynaChatAccount;
  isPublic: boolean;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
};
export type MynaChatSummary = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  messageCount: number;
  lastMessage: ChatMessage | null;
};
