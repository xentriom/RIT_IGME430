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
  createdDate: string;
  [key: string]: unknown;
};
export type Account = {
  username: string;
  displayName: string;
  isPublic: boolean;
  bio: string;
  plan: SubscriptionPlan;
  createdDate: string;
  isFollowing: boolean;
};
export type Post = {
  _id: string;
  owner: {
    username: string;
    displayName: string;
    isPremium: boolean;
    bio?: string;
  };
  body: string;
  parent: string | null;
  audience: ReplyOptions;
  createdDate: string;
  likeCount: number;
  replyCount: number;
  likedByMe: boolean;
};
