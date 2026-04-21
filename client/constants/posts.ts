import {
  Globe2Icon,
  UserCheck2Icon,
  BadgeCheckIcon,
  UserX2Icon,
  type LucideIcon,
} from "lucide-react";
import type { ReplyOptions, SubscriptionPlan } from "../types";

export const ReplyLength: Record<SubscriptionPlan | "org", number> = {
  free: 128,
  basic: 256,
  premium: 512,
  "premium+": 1024,
  org: 2048,
} as const;

export const PostReplyOptions: Record<ReplyOptions, { icon: LucideIcon; label: string }> = {
  everyone: {
    icon: Globe2Icon,
    label: "Everyone",
  },
  followers: {
    icon: UserCheck2Icon,
    label: "Accounts you follow",
  },
  verified: {
    icon: BadgeCheckIcon,
    label: "Verified accounts",
  },
  none: {
    icon: UserX2Icon,
    label: "Only you",
  },
};
